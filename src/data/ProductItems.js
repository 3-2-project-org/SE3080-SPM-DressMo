import sheenchair from "../assets/models/shoe.glb";
import ioschair from "../assets/models/shirt.usdz";
import painting from "../assets/models/4.glb";
import iospainting from "../assets/models/4.usdz";
import car from "../assets/models/3.glb";
import ioscar from "../assets/models/3.usdz";
import car1 from "../assets/models/5.glb";
import ioscar1 from "../assets/models/5.usdz";
import sheenchair1 from "../assets/models/2.glb";
import ioschair1 from "../assets/models/2.usdz";
import painting1 from "../assets/models/shirt.glb";
import iospainting1 from "../assets/models/shirt.usdz";
import car2 from "../assets/models/3.glb";
import ioscar2 from "../assets/models/3.usdz";
import car3 from "../assets/models/test.glb";
import ioscar3 from "../assets/models/test.usdz";

const productItems = [

  {
    id: 5,
    name: "Sport Shoes",
    modelSrc: sheenchair,
    iOSSrc: ioschair,
    category: "T-shirt",
    color: "Orange",
    customizeButton: "Customize Shoes",
  },
  {
    id: 1,
    name: "Blouse",
    modelSrc: painting,
    iOSSrc: iospainting,
    category: "Art",
    color: "Brown",
    customizeButton: "Customize Dress",
  },
  {
    id: 2,
    name: "T-shirt",
    modelSrc: sheenchair1,
    iOSSrc: ioschair1,
    category: "Vehicle",
    color: "Red",
    customizeButton: "Customize Dress",
  },
  {
    id: 3,
    name: "T-shirt",
    modelSrc: car,
    iOSSrc: ioscar,
    category: "Vehicle",
    color: "Blue",
    customizeButton: "Customize Dress",
  },

  {
    id: 4,
    name: "T-shirt",
    modelSrc: car1,
    iOSSrc: ioscar1,
    category: "Vehicle",
    color: "Red",
    customizeButton: "Customize Dress",
  },

  {
    id: 6,
    name: "Men's Trousers & Pants at ...",
    modelSrc: car3,
    iOSSrc: ioscar3,
    category: "Vehicle",
    color: "Red",
    customizeButton: "Customize Dress",
  },

  {
    id: 7,
    name: "T-shirt",
    modelSrc: painting1,
    iOSSrc: iospainting1,
    category: "Vehicle",
    color: "Red",
    customizeButton: "Customize Dress",
  },
  {
    id: 8,
    name: "T-shirt",
    modelSrc: car2,
    iOSSrc: ioscar2,
    category: "Vehicle",
    color: "Red",
    customizeButton: "Customize Dress",
  },
];
export default productItems;
