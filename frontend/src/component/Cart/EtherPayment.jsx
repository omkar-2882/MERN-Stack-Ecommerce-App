import React, { Fragment, useEffect, useState } from "react";
import { ethers } from "ethers";
import "./EtherPayment.css";
import CheckoutSteps from "../Cart/CheckoutSteps";
import MetaData from "../layout/MetaData";
import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { createOrder, clearErrors } from "../../actions/orderAction";
import { emptyCart } from "../../actions/cartAction";

const EtherPayment = ({history}) => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const paymentData = {
    amount: Math.round(orderInfo.totalPrice) * 0.000013880782269919619,
  };

  const [amount, setAmount] = useState(paymentData.amount);
  const [destinationAddress, setDestinationAddress] = useState("0x19a53c08a98554d15625B9afAfe6382f9d75eEf6");
  const [perror, setPError] = useState("");
  const [transaction, setTransaction] = useState(null);

  const dispatch = useDispatch();
  const alert = useAlert();

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.newOrder);


  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const startPayment = async (event) => {
    console.log({ amount, destinationAddress });
    event.preventDefault();
    setPError("");

    try {
      if (!window.ethereum) {
        throw new Error("No crypto wallet found. Please install it.");
      }

      await window.ethereum.send("eth_requestAccounts");

      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const signer = provider.getSigner();

      ethers.utils.getAddress(destinationAddress);

      const transactionResponse = await signer.sendTransaction({
        to: destinationAddress,
        value: ethers.utils.parseEther(amount.toString()),
      });

      setTransaction(transactionResponse);

      // console.log(JSON.stringify(transaction));

    } catch (error) {
      console.log({ error });
      setPError(error.message);
      // alert.error(perror);
    }
  };


  useEffect(() => {
    if (error||perror) {
      alert.error(error||perror);
      dispatch(clearErrors());
    }
    if (transaction) {
      console.log(JSON.stringify(transaction));
      order.paymentInfo = {
        id: transaction.from,
        status: "succeeded",
      };
      dispatch(createOrder(order));
      dispatch(emptyCart());
      history.push("/success");
    }

  }, [dispatch, perror, alert, transaction]);


  return (
    <Fragment>
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2} />

      <div className="paymentContainer">
        <form className="paymentForm">
          <Typography className="cardinfoHeading">Transaction Info</Typography>
          <div>
            <i className="fa-brands fa-ethereum fa-lg icon"></i>
            <input
              type="number"
              placeholder="Amount ETH"
              value={amount}
              className="col-12 form-control paymentInput"
              onChange={(event) => {
                setAmount(Number.parseFloat(event.target.value));
              }}
              
            />
          </div>
          <div>
            <i className="fa-solid fa-hashtag fa-lg icon"></i>
            <input
              placeholder="Destination address"
              value={destinationAddress}
              className="col-12 form-control paymentInput"
              onChange={(event) => {
                setDestinationAddress(event.target.value);
              }}
              readOnly
            />
          </div>
          <button
            className="btn paymentFormBtn"
            onClick={startPayment}
          >
            Send Payment
          </button>
        </form>

        {/* {transaction && (
          <div className="alert alert-success mt-3" role="alert">
            {JSON.stringify(transaction)}
          </div>
        )}

        {perror && (
          <div className="alert alert-danger" role="alert">
            {JSON.stringify(perror)}
          </div>
        )} */}
      </div>
    </Fragment>
  );
};

export default EtherPayment;
