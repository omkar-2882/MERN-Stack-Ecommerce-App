const express = require("express")
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails, createProductReview, getProductReviews, deleteReview, getAdminProducts } = require("../controllers/productController")
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth")

const router = express.Router()

router.route("/products").get(getAllProducts)

router.route("/admin/products").get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

router.route("/admin/product/new").post(isAuthenticatedUser, authorizeRoles("admin"), createProduct)

router
    .route("/admin/product/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)

// Get Product Details
router.route("/product/:id").get(getProductDetails)

// Create/Update Review
router.route("/review").put(isAuthenticatedUser, createProductReview)


router.route("/reviews")
// Get All Reviews
    .get(getProductReviews)
// Delete Review (Admin)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteReview)

module.exports = router