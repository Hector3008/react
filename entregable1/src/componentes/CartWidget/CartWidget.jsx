import "./CartWidget.css"

const CartWidget = () => {
  const CartIMG = <span class="material-symbols-outlined">
shopping_cart
</span>
  return (
    <div className="CartWidget">{CartIMG} <strong>10</strong></div>
  )
}

export default CartWidget