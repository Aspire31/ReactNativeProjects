import React from 'react';
import { View, StyleSheet, Image, FlatList } from 'react-native';

// function Item({ image }) {
//     return (
//         <View style={styles.container}>
//             <View style={styles.item}>
//                 <Image
//                     style={{ height: 100, width: 100 }}
//                     source={{ uri: image }}
//                 />
//             </View>
//         </View>
//     );
// }



export default class ImageList extends React.Component {
    renderData = (rowData) => {
        let { item, index } = rowData;
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <Image
                        style={{ height: 100, width: 100, borderRadius: 20 }}
                        source={{ uri: item.url }}
                    />
                </View>
            </View>
        )
    }

    render() {
        return (
            <View>
                <FlatList
                    data={itemData}
                    numColumns={3}
                    renderItem ={this.renderData}
                    keyExtractor={(item,index) => index.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'lightgray',
    },
    item: {
        marginVertical: 10,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: 'space-around',
        // borderRadius: 20,
        elevation: 3,
        shadowOpacity: 0.5,
        shadowColor: 'black'
    },
});

const itemData = [
    { url: 'https://videohive.img.customer.envatousercontent.com/files/223920975/Low%20Poly%20Colorful%20Background%20Preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=1cb2f65195a0f169b9e11b098421c69c' },
    { url: 'https://videohive.img.customer.envatousercontent.com/files/175849587/Fabric%20Flowing%20Cloth%20Curtain%20Preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=5b34cb9b1923cd8ff9eeef10eda8f4c9' },
    { url: 'https://videohive.img.customer.envatousercontent.com/files/82907887/MagicClothLightenPreview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=da625e729804e28a474dc46e7a33559b' },
    { url: 'https://camo.envatousercontent.com/c658e103930890890c37a8d6804502d4c3321cc7/68747470733a2f2f302e73332e656e7661746f2e636f6d2f66696c65732f3138363039363432362f5374617273253230476c6f7725323054756d622e6a7067' },
    { url: 'https://s3.envato.com/files/246055431/Colorful%20Flowers%2001_preview1.JPG' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN4-95QSV5T9KQg6F95kMV6fWnme-zWp9OjKLT7KNnYgOCOuiU' },
    { url: 'https://cdn.shopify.com/s/files/1/0020/5111/3069/products/product-image-400926614_800x.jpg?v=1556588432' },
    { url: 'https://paintings.pinotspalette.com/colorful-love-tv.jpg?v=10020931' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT96YyUEHgiaY2SvLuTPoqoJ3mo2d0fQgb69qUsHdG-RdoL9CF' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Mkl8x1B1OaZwnzuxQ62cjBqZG6-xYZ_L8pcgDwtouoZarnQz' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfn9aLYwQE5hut6U09Edj84Nm4UGZ-liD4v7x0LJ9StoRDC2KC' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-dRqQeJBj-4uycZ0SpGkjXNXGW4KSQ2XbnThQahAlvE9n-HQM' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5hzIB0N8oWSaJaCSZvzKqDIU-DBRYptOpUi2gTX6bL6O9UaB' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4cBV0gb5fe5ihw9RjNofvzObc0miLmEatSQQ1Qrwy3_ShsAUj' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcMkUNdkU2tKKcLTgnGDs_z3C_y93JkKm-KFMpoy9wbFnWoqg0' },
    { url: 'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/8161/17425/52Flower60__75006.1439880814.jpg?c=2&imbypass=on' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHbVzd0-75cWB97bDXNpyc5-C7AvHQ8R82VJ91-TldV9j54qLc' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPPMsWu80SZCnmL4DlFiFHCDWm0qie9_k4ZJcKk8fK5K6Y5xrb' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtGMGVZvdSsioKfy6_xBfKFl1B5ljuiE5X4Frm0jfKjK_8fLgS' },
    { url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/colorful-of-dahlia-pink-flower-in-beautiful-garden-royalty-free-image-825886130-1554743243.jpg?crop=0.669xw:1.00xh;0.331xw,0&resize=640:*' },
]