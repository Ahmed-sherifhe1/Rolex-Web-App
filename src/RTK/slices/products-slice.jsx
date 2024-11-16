import { createSlice } from "@reduxjs/toolkit";

import ndWatch from "../../assets/nd-watch-slice.webp";
import ndWatch1 from "../../assets/nd-watch-1.webp";
import ndWatch2 from "../../assets/nd-watch-2.webp";
import ndWatch3 from "../../assets/nd-watch-3.webp";

import rdWatch from "../../assets/rd-watch-slice.webp";
import rdWatch1 from "../../assets/rd-watch-1.webp";
import rdWatch2 from "../../assets/rd-watch-2.webp";
import rdWatch3 from "../../assets/rd-watch-3.webp";

import thWatch from "../../assets/th-watch-slice.webp";
import thWatch1 from "../../assets/th-watch-slice-1.webp";
import thWatch2 from "../../assets/th-watch-slice-2.webp";
import thWatch3 from "../../assets/th-watch-slice-3.webp";

import watch6 from "../../assets/watch-6-slice.webp";
import watch61 from "../../assets/watch-6-slice-1.webp";
import watch62 from "../../assets/watch-6-slice-2.webp";
import watch63 from "../../assets/watch-6-slice-3.webp";

import watch7 from "../../assets/watch-7-slice.webp";
import watch71 from "../../assets/watch-7-slice-1.webp";
import watch72 from "../../assets/watch-7-slice-2.webp";
import watch73 from "../../assets/watch-7-slice-3.webp";

import watch8 from "../../assets/watch-8-slice.webp";
import watch81 from "../../assets/watch-8-slice-1.webp";
import watch82 from "../../assets/watch-8-slice-2.webp";
import watch83 from "../../assets/watch-8-slice-3.webp";

import watch9 from "../../assets/watch-9-slice.webp";
import watch91 from "../../assets/watch-9-slice-1.webp";
import watch92 from "../../assets/watch-9-slice-2.webp";
import watch93 from "../../assets/watch-9-slice-3.webp";

import watch10 from "../../assets/watch-10-slice.webp";
import watch101 from "../../assets/watch-10-slice-1.webp";
import watch102 from "../../assets/watch-10-slice-2.webp";
import watch103 from "../../assets/watch-10-slice-3.webp";

import new1 from "../../assets/new-1-slice.webp";
import new11 from "../../assets/new-1-1.webp";
import new12 from "../../assets/new-1-2.webp";
import new13 from "../../assets/new-1-3.webp";

import new2 from "../../assets/new-2-slice.webp";
import new21 from "../../assets/new-2-slice-1.webp";
import new22 from "../../assets/new-2-slice-2.webp";
import new23 from "../../assets/new-2-slice-3.webp";

import new3 from "../../assets/new-3-slice.webp";
import new31 from "../../assets/new-3-slice-1.webp";
import new32 from "../../assets/new-3-slice-2.webp";
import new33 from "../../assets/new-3-slice-3.webp";

import new4 from "../../assets/new-4-slice.webp";
import new41 from "../../assets/new-4-slice-1.webp";
import new42 from "../../assets/new-4-slice-2.webp";
import new43 from "../../assets/new-4-slice-3.webp";

import new5 from "../../assets/st-watch.webp";
import new51 from "../../assets/original-watch-1.webp";
import new52 from "../../assets/original-watch-2.webp";
import new53 from "../../assets/original-watch-3.webp";

let productsSlice = createSlice({
  name: "productsSlice",
  initialState: [
    {
      id: 1,
      img: ndWatch,
      imgsmall: { 1: ndWatch1, 2: ndWatch2, 3: ndWatch3 },
      title: "JAZZMASTER",
      price: "$1050",
      new: false,
      des: "Rose gold-tone stainless steel case with a brown leather strap. Fixed rose gold-tone bezel. White skeleton dial with luminous rose gold-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. Luminescent hands and markers. Automatic movement with a 40-hour power reserve. Scratch resistant sapphire crystal. Skeleton case back. Case diameter: 40 mm. Case thickness: 11 mm. Round case shape. Band width: 20 mm. Tang clasp. Water resistant at 50 meters / 165 feet. Functions: hour, minute, second. Dress watch style. Hamilton Jazzmaster Viewmatic White Skeleton Dial Brown Leather Men's Watch H42545551.",
    },
    {
      id: 9,
      img: new1,
      imgsmall: { 1: new11, 2: new12, 3: new13 },
      title: "LONGINES ROSE",
      price: "$980",
      new: true,
      des: `Longines Conquest Classic Chronograph Automatic 41mm L2.786.5.56.3

Full box and card
Diameter: 41mm, thickness: 14mm
Uses an Automatic Column-wheel Chronograph movement with a frequency of 28,800 vibrations per hour, 27 jewels, enabling functions such as a seconds hand at the 9 o’clock position, chronograph hour and minute hands at the 3 o’clock and 6 o’clock positions respectively. Overall, it’s a fantastic design.
Solid 18k rose gold bezel
Gold hands with luxurious, convenient luminescence
Manufacturer’s price: approximately 100 million VND`,
    },

    {
      id: 2,
      img: rdWatch,
      imgsmall: { 1: rdWatch1, 2: rdWatch2, 3: rdWatch3 },
      title: "INGERSOLL",
      price: "$250",
      new: false,
      des: `The Ingersoll IN1318RBR Shawnee is 38mm in diameter and 15 mm in height.
The casing of the Ingersoll IN1318RBR is made of Stainless Steel 316L.
The Ingersoll Shawnee has a bottom made ofmineral-Glas.
The color of the dial of the Shawnee is brown.
The top glass is mineral glass.
The movement of the IN1318RBR Shawnee is a automatic movement.
The strap of the Ingersoll IN1318RBR is made of Leather
and the color is brown.
The Bracelet Width is 18 mm.
The clasp of the Ingersoll IN1318RBR is a Folding clasp
and has the color red gold.
The watch is till 3 ATM waterproofed.
The IN1318RBR Shawnee has 22 Jewels.
The functions of the Ingersoll Shawnee are date, day, month, 24 hour.`,
    },

    {
      id: 10,
      img: new2,
      imgsmall: { 1: new21, 2: new22, 3: new23 },
      title: "JAZZMASTER",
      price: "$1150",
      new: true,
      des: "The beautiful Hamilton H32546781 watch features a rose gold-tone stainless steel 42mm case, with a fixed rose gold-tone bezel, and a grey dial covered by a scratch resistant sapphire crystal. The stylish wristwatch is equipped with an exclusive 22mm leather which combines comfort and sturdiness. This horological trendy device has chronograph, date, hour, minute, second functions.",
    },
    {
      id: 3,
      img: thWatch,
      imgsmall: { 1: thWatch1, 2: thWatch2, 3: thWatch3 },
      title: "ROSE GOLD",
      price: "$890",
      new: false,
      des: "The Mido watch features a sapphire glass and is designed for office wear. It has a 316L stainless steel case and a power reserve of 40 hours. The watch comes with a leather strap and includes hand-winding and hacking stop features. It offers a 5-year warranty and is categorized as a men’s watch. The dial is black, and the watch is in new condition. It is water-resistant up to 50 meters and operates with an automatic (hand-winding) movement. The case is rose gold in color and measures 42 mm in size.",
    },
    {
      id: 4,
      img: watch6,
      imgsmall: { 1: watch61, 2: watch62, 3: watch63 },
      title: "SPIRIT ROSE",
      price: "$1500",
      new: false,
      des: "The BREITLING CLASSIC AVI CHRONOGRAPH 42 P-51 MUSTANG boasts a 42mm 18k red gold case and is water-resistant up to 100 meters. It features a screwed-in caseback, a bidirectional ratcheted bezel, and a non screw-locked, one gasket crown. Powered by the Breitling 23 self-winding movement, it offers an approximate 48-hour power reserve. The watch comes with a calfskin black leather strap and includes a 2-year Breitling international warranty.",
    },
    {
      id: 11,
      img: new3,
      imgsmall: { 1: new31, 2: new32, 3: new33 },
      title: "DREYFUSS GOLD",
      price: "$750",
      new: true,
      des: "Characteristics of this Dreyfuss & Co wristwatch: · Classification: Dreyfuss & Co automatic timepiece Versace reference number: DGS00162/02 · Movement: automatic movement Functions: hour, minute, second and date · Hands: rose gold coloured luminous hands · Dial colour: silver-coloured with Dreyfuss & Co logo · Crystal: sapphire crystal · Case dimensions: approx. 40 mm diameter · Case height: approx. 11 mm · Tested water resistance: 5 ATM · Casing and bezel made of polished stainless steel, rose gold coloured · Strap: high-quality black leather strap in crocodile look · Strap width: approx. 20 mm · Clasp: covered folding clasp with buttons on the side · Included in the delivery: Dreyfuss & Co timepiece, Dreyfuss & Co storage box, all papers, certificate and a receipt indicating VAT.",
    },
    {
      id: 5,
      img: watch7,
      imgsmall: { 1: watch71, 2: watch72, 3: watch73 },
      title: "KHAKI PILOT",
      price: "$1350",
      new: false,
      des: "How it felt to be an early aviator, a pioneering pilot flying an airplane at the turn of the twentieth century is something that can’t be recreated, but Hamilton can give you the look - created using modern materials including stainless steel and sapphire crystal. Add an automatic movement and a perfectly proportioned 42mm case for a new take on a vintage timepiece.",
    },
    {
      id: 6,
      img: watch8,
      imgsmall: { 1: watch81, 2: watch82, 3: watch83 },
      title: "JUBILEE BLACK",
      price: "$870",
      new: false,
      des: "Mido draws its inspiration for the Multifort Gentleman Swiss watch from the architecture of the famous Sydney Harbour Bridge. The Multifortâ€™s characteristic Geneva stripes on the dial recall the suspension cables on the Bridge. But the robustness and exceptional longevity of this collection, which has been in production since 1934, also define the Multifort Gentleman as a sporty watch that has stood the test of time. Its Caliber 80 automatic movement adds to this robustness by giving it up to 80 hours of power reserve.",
    },
    {
      id: 12,
      img: new4,
      imgsmall: { 1: new41, 2: new42, 3: new43 },
      title: "PORTUGUESE ROSE",
      price: "$1590",
      new: true,
      des: "This certified authentic Brand New IWC Portugieser Sports Watch, Model Number IW390405, features a Red Gold 42 mm Round Case with a Screw Down Crown and a Red Gold Bezel. The Men’s IWC Portugieser boasts an attractive Grey Dial with Arabic Dial Markers. Its high-quality IWC Automatic Movement ensures perfect timekeeping, while the reliable IWC Leather Bracelet adds a stylish touch to your wrist.",
    },
    {
      id: 7,
      img: watch9,
      imgsmall: { 1: watch91, 2: watch92, 3: watch93 },
      title: "FOSIL ME3",
      price: "$650",
      new: false,
      des: "Brand New 100% Original Comes with Tag and  Fossil  Packaging 2 (One) year Official Royal Watches Store Warranty +1 (307) 243-8480 BRAND, SELLER, OR COLLECTION NAME Fossil MODEL NUMBER ME3061 PART NUMBER ME3061 MODEL YEAR 2016 ITEM SHAPE Round DIAL WINDOW MATERIAL TYPE Mineral DISPLAY TYPE Analog CLASP Buckle CASE",
    },
    {
      id: 8,
      img: watch10,
      imgsmall: { 1: watch101, 2: watch102, 3: watch103 },
      title: "DUCHEN",
      price: "$950",
      new: false,
      des: "Carcassonne collection timepiece with Swiss Ronda movement accurately displays the hours, minutes, seconds and a date. Stainless steel case catches the eyes with combination of polished and brushed parts. The main decoration of the black dial is the guilloche pattern in the central zone. It consists of a repetitive image of an oak leaf, the logo of L?Duchen. Scratch-resistance sapphire glass. This model is available with black genuine leather strap with a folding clasp. The crown and folding clasp are decorated with brand?s logo.",
    },
    {
      id: 13,
      img: new5,
      imgsmall: { 1: new51, 2: new52, 3: new53 },
      title: "HAWAII PIONIER",
      price: "$1245",
      new: true,
      des: "Modern and casual with a versatile and ruggedly sophisticated look. Under the sapphire coated glass lay the marvels of a wonderful watch face that will have you hooked at first look. The perfect attitude and best performing movement in terms of accuracy.",
    },
  ],
});

export default productsSlice.reducer;
