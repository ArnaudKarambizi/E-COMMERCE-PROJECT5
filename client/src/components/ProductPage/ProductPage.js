import React from "react";
import Card from "../Card";
// import furnitures from "../../assets/furniture.json";
import ProductFilter from "./ProductFilter";
export default function ProductPage(props) {
    //1.EXTRACTING PRODUCTS FROM ARRAY into different VARIABLES using destructuring

    let chairs = props.furnituresArray.filter(
        item => item.Product_Category === "chair"
    );
    let sofas = props.furnituresArray.filter(
        item => item.Product_Category === "sofa"
    );
    let tables = props.furnituresArray.filter(
        item => item.Product_Category === "table"
    );
    console.log("chairs", props.furnituresArray);

    // 4. FILTERING PRODUCTS BY FURNITURE TYPE

    const filter = (selectValue, furnitureType) => {
        if (selectValue === furnitureType || selectValue === "default") {
            return;
        } else {
            return "product-hide";
        }
    };

    return (
        <section className="nav-container">
            {/* PASSING  SELECTfILTER INTO PROP  to productFilter component */}

            <ProductFilter selectFilter={props.selectFilter} />

            <button className="allproducts" onClick={props.getProducts}>
                show all products
            </button>

            <div className="product-container">
                <section
                    className={`chair ${filter(props.selectValue, "chair")}`}
                >
                    {/*2. LOOPING THROUGH THE JSON FILE  TO GET PRODUCT CARDS   USING MAP AND PASSING IT'S PROP IN THE CARD COMPONENT   */}

                    {chairs.map(chair => {
                        return <Card key={chair.id} productsProp={chair} />;
                    })}
                </section>

                <section
                    className={`sofa ${filter(props.selectValue, "sofa")}`}
                >
                    {sofas.map(sofa => {
                        return <Card key={sofa.id} productsProp={sofa} />;
                    })}
                </section>

                <section
                    className={`table ${filter(props.selectValue, "table")}`}
                >
                    {tables.map(table => {
                        return <Card productsProp={table} key={table.id} />;
                    })}
                </section>
            </div>
        </section>
    );
}
