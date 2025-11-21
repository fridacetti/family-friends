"use server";

export const submitProduct = async (prevState, formData) => {
  const error = {};
  const productName = formData.get("productname");
  const productPrice = formData.get("productprice");
  if (!productName) {
    error.productName = "Feltet skal udfyldes";
  } else if (productName.length < 5) {
    error.productName = "Min. 5 tegn";
  }

  
  if (!productPrice) {
    error.productPrice = "Feltet skal udfyldes";
  } else if (isNaN(Number(productPrice))) {
    error.productPrice = "Det skal være tal";
  }
  
  if (Object.keys(error).length > 0) {
    return { error, productName, productPrice };
  }


  return { succes: true };
};

