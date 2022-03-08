import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";



const PAGE_PRODUCTS ="products";
const PAGE_CART = "cart"

function App() {

const[ cart,setCart]= useState([])
 const [ page,setPage]=useState(PAGE_PRODUCTS)
 



  
  const  [products] = useState([
  
    {name : "Samsung-9f",
    cost :"Rs :80,000",
    type : "electronics",
    des : "('branded smart phone') ",
    image:"https://png.pngitem.com/pimgs/s/127-1273781_samsung-9f-hd-png-download.png"
  
    },

    {name : "Hairdryer",
    cost :"Rs :2000",
    type : "electronics",
    des : "('single hairdryer for girls')",
    image:"https://mr-cdn.imgix.net/content/images/2019/1/jsma6zy4-hairdyrer-no-diffuser-2000x2000/hairdyrer-no-diffuser-2000x2000.jpeg?w=640&h=641&fit=crop&crop=faces&auto=format"
  
    },
    {name : "Straightener",
    cost :"Rs :5000",
    type : "electronics",
    des : "('Branded straightener for girls')",
    image:"https://www.pngitem.com/pimgs/m/567-5678717_hair-straightener-png-vector-clipart-psd-hair-straightener.png"
  
    },
    {name : "Curling Machine",
    cost :"Rs :10,000",
    type : "electronics",
    des : "('Curling Machine for girls')",
    image:"https://image.made-in-china.com/2f0j00wdaQHLERuTcr/Beauty-Hair-Curling-Machine-Auto-Hair-Tool.jpg"
  
    },

    

    {name : "Juicer machine",
    cost :" Rs :25,000",
    type : "electronics",
    des : "('Easy to use juicer machine')",
    image:"https://www.kindpng.com/picc/m/473-4733635_juicer-machines-aicok-slow-masticating-juicer-aicok-juicer.png"
  
    },
    {name : "Iron",
    cost :"Rs :7000",
    type : "electronics",
    des : "('heavy duty iron')",
    image:"data:image/jpeg;base64,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"
  
    },
    {name : "Washing Machine",
    cost :"Rs :35,000",
    type : "electronics",
    des : "('automatic washing machine')",
    image:"https://www.staxappliances.com.au/assets/full/EWF14822.jpg?20210311132921"
  
    },
    
    {name : "Water Dispenser",
    cost :"Rs :20,000",
    type : "electronics",
    des : "('branded and stylish water dispenser')",
    image:"https://www.cemglobal.com/wp-content/uploads/2018/09/FW-WD449.png"
  
    },
    {name : "Refrigerator",
    cost :"Rs :70,000",
    type : "electronics",
    des : "('Brand New double door refrigerator')",
    image:"https://www.seekpng.com/png/small/255-2558317_lg-refrigerator-png-image-lg-side-by-side.png"
  
    },
    {name : " Modern Lamp",
    cost :"Rs :15,000",
    type : "electronics",
    des : "('stylish and Modern lamp')",
    image:"https://images.squarespace-cdn.com/content/v1/5c2460db85ede16ce7a7341a/1569264693162-FT17V3U5KP6I06932EVQ/Modern+Table+Lamp+With+Fabric+Lampshad2.png?format=1000w"
  
    },
 
   {
        name: "APPLE",
        cost : " Rs :100/.",
        type:"fruit and veg",
        des: "('  Fresh Apple Rs. 120 per kg')",
        image : "https://media.istockphoto.com/photos/jonagold-apples-in-a-basket-picture-id137349326?k=20&m=137349326&s=170667a&w=0&h=iIf4Hvdmu7Hr8NyMXtQC197U0J-vAWDIiFNCyCubDQw="
      },
      {
        name: "BANANA",
        cost : "Rs :150/.",
        type:"fruit and veg",
        des: "(' Fresh Banana Rs. 120 per dorzen')",
        image : "https://www.somewhatsimple.com/wp-content/uploads/2014/07/How-to-make-bananas-last-longer.png"
      },
      {
        name: "MANGO",
        cost : "Rs :220/.",
        type:"fruit and veg",
        des: "(' Fresh and Healthy Mangoes Rs. 220 per kg ')",
       image : "https://pk.all.biz/img/pk/catalog/80860.png"
      },
      {
        name: "GRAPES",
        cost : "Rs :130/.",
        type:"fruit and veg",
        des: "(' Fresh and Healthy Grapes Rs. 130 per kg ')",
       image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7P7lzNgQJPEVlDJMT6-1qymF-wTLol34fgmcnJYlatL5zM3Cmb6EAlja9XY_aib2ZLJo&usqp=CAU"
      },
      {
        name: "ORANGE",
        cost : "Rs :200/.",
        type:"fruit and veg",
        des: "(' Fresh and Healthy oranges Rs. 200 per dorzen ')",
       image : "https://www.pngitem.com/pimgs/m/155-1555615_orange-navel-hd-png-download.png"
      },
     
      {
        name: "ONION",
        cost : "Rs :50/.",
        type:"fruit and veg",
        des: "(' Fresh and Healthy  Onion Rs:50 per kg ')",
       image : "https://www.nicepng.com/png/detail/192-1925733_onion-free-png-image-transparent-background-onion-png.png"
      },
  
      {
        name: "Carrot",
        cost : "Rs :150/.",
        type:"fruit and veg",
        des: "(' Fresh and Healthy carrot Rs. 150 per kg ')",
       image : "https://img.freepik.com/free-photo/fresh-carrots-vegatables-isolated-white_80510-413.jpg?size=626&ext=jpg"
      },
      {
        name: "cabbage",
        cost : "Rs :170/.",
        type:"fruit and veg",
        des: "(' Fresh and Healthy cabbage Rs. 170 per kg ')",
       image : "https://landersgroupgh.com/wp-content/uploads/2021/03/131-1311318_cabbage-png-transparent-images-cabbage-vegetable-png-download.png"
      },
      {
        name: "capsicum",
        cost : "Rs :180/.",
        type:"fruit and veg",
        des: "(' Fresh and Healthy capsicum Rs. 180 per kg ')",
       image : "https://5.imimg.com/data5/JA/PQ/MY-19237629/fresh-capsicum-500x500.png"
      },
      {
        name: "TOMATOES",
        cost : "Rs :120/.",
        type:"fruit and veg",
        des: "(' Fresh and Healthy Tomatos Rs. 120 per kg ')",
       image : "https://thumbs.dreamstime.com/b/fresh-red-tomatoes-wicker-basket-white-background-32792404.jpg"
      },
 
      {
        name: "Men Shirt",
        cost : "Rs :1000/..",
        type :"men ,women product",
        des: "('check style shirt for Men')",
       image : "https://www.pngitem.com/pimgs/m/358-3585688_check-shirts-png-background-stylish-check-shirts-for.png"
      },
      {
        name: "Men Watch",
        cost : "Rs :2,700/..",
        type :"men ,women product",
        des: "('branded men watch')",
       image : "https://www.pngitem.com/pimgs/m/115-1156789_watches-png-image-watch-images-png-transparent-png.png"
      },
      {
        name: "MEN SHOES",
        cost : "Rs :2000/.",
        type :"men ,women product",
        des: "('Men branded shoes')",
       image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRffkuTGT8YTwsfITnX9KOLayu1CUax2-SuWlo6kxu4moqMYgohQ08ceT1qlKNbJwxWU&usqp=CAU"
      },
  
      {
        name: "Women kurti ",
        cost : "Rs :1500/..",
        type :"men ,women product",
        des: "('branded women kurti')",
       image : "https://media.nojoto.com/content/media/90891866db7068e817334e88b52d46df"
      },
     
  
      
      {
        name: "SANDEL",
        cost : "Rs :1200/.",
        type :"men ,women product",
        des: "('Flat Stylish Sandel')",
       image : "https://i.pinimg.com/originals/34/ed/c7/34edc72e722d8f0d34d36c8bbd601175.png"
      },
      {
        name: "BLANKET",
        cost : "Rs :1500/..",
        type :"men ,women product",
        des: "('Pure Woolen Blanket')",
       image : "https://4.imimg.com/data4/WY/AL/MY-22245997/double-ply-mink-blankets-500x500.jpg"
      },
  
      {
        name: "TOY CAR",
        cost : "Rs :1800/.",
        type :"men ,women product",
        des: "(' Remote Control Car for Childern')",
       image : "https://i.ebayimg.com/images/g/700AAOSw7k9dncmz/s-l300.jpg"
      },
     
      {
        name: "CUSHION",
        cost : "Rs :500/.",
        des: "('Soft Cushion')",
        type :"men ,women product",
       image : "https://i.pinimg.com/originals/44/e9/46/44e946ce6047c7f91fd608743aab7691.png"
      },
  
    
  
      {
        name: "LADIES BAG",
        cost : "Rs :2500/.",
        type :"men ,women product",
        des: "('Bag for Ladies only Rs:2500/. each')",
       image : "https://5.imimg.com/data5/EZ/OQ/OC/SELLER-67282481/ladies-fashion-bags-500x500.png"
      },
      
      {
        name: "PERFUME",
        cost : "Rs :4000/.",
        type :"men ,women product",
        des: "('Branded Perfume for ladies only in Rs: 4000')",
       image : "http://cdn.shopify.com/s/files/1/0500/8539/6644/collections/WeChat_Image_20201019162014_1200x1200.png?v=1603106782"
      }
    ])


   


   
   const filterProduct = (e) => {
     let a = e.target.value
     let arr = products.filter(x=>x.type == a)
     console.log(arr)
    
   };
  

  const addToCart =(product) => {
   
    setCart([...cart,{...product}]);
  }
 const removeFromCart = (productToRemove) =>{
   setCart(
     cart.filter((product)=> product !== productToRemove)
   );
 };

  const navigateTo = (nextPage) =>{
    setPage(nextPage);
  };

  const renderProducts = () =>(
  <>
      <h1>PRODUCTS</h1>
      <div  className="products">
      {products.map((product, idx) => (

        <div  className="prod" key={idx}>
        <h1>{product.name}</h1>
        <h3>{product.cost}</h3>
        <h5>{product.des}</h5>
        <img src={product.image} alt={product.image}/>
        <button onClick={()=> addToCart(product)}>Add To Cart</button>
      </div>
      ))}

</div>

</>
)
const renderCart= () =>(
<>
    <h1>CART</h1>
    <div  className="products">
    {cart.map((product, idx) => (

      <div  className="prod" key={idx}>
      <h1>{product.name}</h1>
      <h3>{product.cost}</h3>
      <img src={product.image} alt={product.image}/>
      <button onClick={()=> removeFromCart(product)}>Remove</button>
    </div>
    ))}

</div>

</>
) 

  return (
 
  
    

    <div className="App">

      <header className="App-header">
   
    <select className='p-1 shadow' onChange={(e) => filterProduct(e)}>
          <option value="men ,women product">Man and women  Product</option>
          <option value="fruit and veg">fruit and vegetables Product</option>
          <option value="electronics">Electronics Product</option>
        </select>
      </header>
        <header>
      <button onClick={()=> navigateTo(PAGE_CART)}> Go To Cart ({cart.length}) </button>

      <button onClick={()=> navigateTo(PAGE_PRODUCTS)}>View Products</button>
      </header>

      {page === PAGE_PRODUCTS &&  renderProducts()}
      {page === PAGE_CART &&  renderCart()}
      
     

  
   
     
    </div>
  );
}


export default App;
  