// import {
//   Page,
//   Text,
//   View,
//   Document,
//   StyleSheet,
//   Image,
// } from "@react-pdf/renderer";
// import logo from "../../assets/logo-header-nav.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import email from "../../assets/email.png";
// import phone from "../../assets/phone.png";
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "column",
//     backgroundColor: "#ffffff",

//     padding: 20,
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
//   header: {
//     fontWeight: "bold",

//     fontSize: 24,
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   text: {
//     marginBottom: 10,
//     fontWeight: "medium",
//     fontSize: 12,
//   },
//   table: {
//     display: "table",
//     width: "auto",
//     margin: "10px 0",
//   },
//   tableRow: {
//     flexDirection: "row",
//   },
//   tableCol: {
//     width: "25%",
//     borderStyle: "solid",
//     borderWidth: 1,
//     borderTopWidth: 0,
//     borderRightWidth: 0,
//     borderLeftWidth: 0,
//     borderColor: "#000",
//     padding: 5,
//   },
//   tableCell: {
//     margin: "auto",
//     marginTop: 5,
//     fontSize: 10,
//   },
//   image: {
//     width: 100,

//     marginBottom: 20,
//     alignSelf: "center",
//   },
//   headerContact: {
//     paddingBottom: 10,
//     paddingLeft: 40,
//     borderBottomWidth: 1,
//     paddingHorizontal: 4,
//     marginBottom: 10,
//     width: 200,
//   },
//   textcontact: {
//     paddingLeft: 0,
//     paddingVertical: 5,
//     color: "#737373",
//     display: "flex",
//     alignItems: "center",
//   },
//   icon: {
//     width: 35,
//     marginTop: 50,
//   },
//   containerIcon: {
//     display: "flex",
//     gap: "1rem",
//   },
// });

// function PDFReceipt({ cartProducts, accountName, accountAddress, isDarkMode }) {
//   let totalPrice = cartProducts.reduce((initialVal, product) => {
//     initialVal += +product.price.slice(1) * product.quantity;
//     return initialVal;
//   }, 0);

//   return (
//     <>
//       <Document
//         className={`w-full ${isDarkMode ? "dark-scroll" : "light-scroll"}`}
//       >
//         <Page size="A4" style={styles.page}>
//           <View style={styles.section}>
//             <Image style={styles.image} src={logo} alt="logo" />
//             <Text style={styles.header}>Rolex Watches</Text>
//             <Text style={styles.text}>
//               Order Date: {new Date().toLocaleDateString()}
//             </Text>
//             <Text style={styles.text}>Order Number: {cartProducts[0]?.id}</Text>
//             <Text style={styles.text}>Customer Name: {accountName}</Text>
//             <Text style={styles.text}>Customer Address: {accountAddress}</Text>
//             <View style={styles.table}>
//               <View style={styles.tableRow}>
//                 <View style={styles.tableCol}>
//                   <Text style={styles.tableCell}>Product Name</Text>
//                 </View>
//                 <View style={styles.tableCol}>
//                   <Text style={styles.tableCell}>Quantity</Text>
//                 </View>
//                 <View style={styles.tableCol}>
//                   <Text style={styles.tableCell}>Price</Text>
//                 </View>
//                 <View style={styles.tableCol}>
//                   <Text style={styles.tableCell}>Total</Text>
//                 </View>
//               </View>
//               {cartProducts.map((item) => (
//                 <View style={styles.tableRow} key={item.id}>
//                   <View style={styles.tableCol}>
//                     <Text style={styles.tableCell}>{item.title}</Text>
//                   </View>
//                   <View style={styles.tableCol}>
//                     <Text style={styles.tableCell}>{item.quantity}</Text>
//                   </View>
//                   <View style={styles.tableCol}>
//                     <Text style={styles.tableCell}>
//                       ${(+item.price.slice(1)).toFixed(2)}
//                     </Text>
//                   </View>
//                   <View style={styles.tableCol}>
//                     <Text style={styles.tableCell}>
//                       ${(+item.price.slice(1) * item.quantity).toFixed(2)}
//                     </Text>
//                   </View>
//                 </View>
//               ))}
//             </View>
//             <Text style={styles.text}>
//               Grand Total: ${totalPrice.toFixed(2)}
//             </Text>
//           </View>
//           <View>
//             <FontAwesomeIcon icon={faEnvelope} />
//             <Text
//               style={styles.headerContact}
//               className="font-bold font-custRoboto pb-4 border-b-2"
//             >
//               Contact Information
//             </Text>
//             <View>
//               <View>
//                 <Text style={styles.textcontact}>
//                   <Image style={styles.icon} src={email} alt="Email Icon" />
//                   ahmedsherifhe1@gmail.com{" "}
//                 </Text>
//               </View>
//               <Text style={styles.textcontact}>
//                 <Image style={styles.icon} src={phone} alt="Phone Icon" />
//                 +20-106-614-6867{" "}
//               </Text>
//             </View>
//           </View>
//         </Page>
//       </Document>
//     </>
//   );
// }

// export default PDFReceipt;

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logo from "../../assets/logo-header-nav.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import email from "../../assets/email.png";
import phone from "../../assets/phone.png";
let img = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
  </svg>
);
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    marginBottom: 10,
    fontWeight: "medium",
    fontSize: 12,
  },
  table: {
    display: "table",
    width: "auto",
    margin: "10px 0",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: "#000",
    padding: 5,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
  },
  image: {
    width: 100,
    marginBottom: 20,
    alignSelf: "center",
  },
  headerContact: {
    paddingBottom: 10,
    paddingLeft: 40,
    borderBottomWidth: 1,
    paddingHorizontal: 4,
    marginBottom: 10,
    width: 200,
  },
  textcontact: {
    paddingLeft: 0,
    paddingVertical: 5,
    color: "#737373",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    width: 35,
    marginTop: 50,
  },
  containerIcon: {
    display: "flex",
    gap: "1rem",
  },
  address: {
    marginBottom: 10,
    fontWeight: "medium",
    fontSize: 12,
    color: "#000",
  },
});

function PDFReceipt({ cartProducts, accountName, accountAddress, isDarkMode }) {
  let totalPrice = cartProducts.reduce((initialVal, product) => {
    initialVal += +product.price.slice(1) * product.quantity;
    return initialVal;
  }, 0);

  return (
    <>
      <Document
        className={`w-full ${isDarkMode ? "dark-scroll" : "light-scroll"}`}
      >
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Image style={styles.image} src={logo} alt="logo" />
            <Text style={styles.header}>Rolex Watches</Text>
            <Text style={styles.text}>
              Order Date: {new Date().toLocaleDateString()}
            </Text>
            <Text style={styles.text}>Order Number: {cartProducts[0]?.id}</Text>
            <Text style={styles.text}>Customer Name: {accountName}</Text>
            <Text style={styles.address}>
              Customer Address: {accountAddress}
            </Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>Product Name</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>Quantity</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>Price</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>Total</Text>
                </View>
              </View>
              {cartProducts.map((item) => (
                <View style={styles.tableRow} key={item.id}>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{item.title}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{item.quantity}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>
                      ${(+item.price.slice(1)).toFixed(2)}
                    </Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>
                      ${(+item.price.slice(1) * item.quantity).toFixed(2)}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
            <Text style={styles.text}>
              Grand Total: ${totalPrice.toFixed(2)}
            </Text>
          </View>
          <View>
            <FontAwesomeIcon icon={faEnvelope} />
            <Text
              style={styles.headerContact}
              className="font-bold font-custRoboto pb-4 border-b-2"
            >
              Contact Information
            </Text>
            <View>
              <View>
                <Text style={styles.textcontact}>
                  <Image style={styles.icon} src={email} alt="Email Icon" />
                  ahmedsherifhe1@gmail.com{" "}
                </Text>
              </View>
              <Text style={styles.textcontact}>
                <Image style={styles.icon} src={phone} alt="Phone Icon" />
                +20-106-614-6867{" "}
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    </>
  );
}

export default PDFReceipt;
