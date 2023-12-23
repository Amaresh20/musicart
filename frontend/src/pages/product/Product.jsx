import productcss from "./product.module.css";
import phonecall from "../../assets/phonecall.png";
import music from "../../assets/music.png";
import shoppingcart from "../../assets/shoppingcart.png";
import rectangle from "../../assets/rectangle.png";
import headphonebg from "../../assets/headphonebg.png";
const Product = () => {
  return (
    <div className={productcss.container}>
      <div className={productcss.navbar}>
        <div className={productcss.leftside}>
          <img src={phonecall} alt="" />
          <p>912121131313</p>
          <p>Get 50% off on selected items</p>
          <p>|</p>
          <p>Shop Now</p>
          <p>Logout</p>
        </div>
      </div>
      <div className={productcss.midside}>
        <div className={productcss.musicart}>
          <img src={music} alt="" />
          <p>Musicart</p>
          <p>Home</p>
        </div>
        <div className={productcss.rightside}>
          <img src={shoppingcart} alt="" />
          <p>View Cart</p>
        </div>
      </div>
      <div className={productcss.headerImg}>
        <img className={productcss.rectangle} src={rectangle} alt="" />
        <h1>Grab upto 50% off on Selected headphones</h1>
        <img className={productcss.headphone} src={headphonebg} alt="" />
        <button>Buy Now</button>
      </div>
      <div className={productcss.inputbox}>
        <input type="text" />
      </div>
      <div className={productcss.products}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
      </div>
    </div>
  );
};
export default Product;
