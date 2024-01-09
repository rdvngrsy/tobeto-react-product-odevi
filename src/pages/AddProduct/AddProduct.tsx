import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import { array, number, object, string } from "yup";
import FormikInput from "../../components/FormikInput/FormikInput";

type Props = {};

const AddProduct = (props: Props) => {
  const initialValues = {
    title: "",
    description: "",
    price: 0,
    stock: 0,
    thumbnail: "",
    images: [],
  };

  const validationSchema = object({
    title: string()
      .required("Başlık alanı zorunludur.")
      .min(3, "Başlık minimum 3 karakter uzunluğunda olmalıdır.")
      .max(50),
    description: string()
      .required("Açıklama alanı zorunludur.")
      .min(5, "Açıklama minimum 5 karakter uzunluğunda olmalıdır.")
      .max(300),
    price: number()
      .required("Fiyat alanı zorunludur.")
      .min(0, "Fiyat 0' dan büyük olmalıdır."),
    stock: number()
      .required("Stok alanı zorunludur.")
      .min(0, "Stok 0' dan büyük olmalıdır.")
      .integer(),
  });

  return (
    <div className="container mt-3">
      <Formik
        
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="row justify-content-md-center">
            <div className="col-8">
              <FormikInput name="title" label="Title" />
              <FormikInput name="description" label="Description" />
              <FormikInput name="price" label="Price" type="number" />
              <FormikInput name="stock" label="Stock" type="number" />
              <FormikInput
                name="thumbnail"
                label="Thumbnail"
                placeholder="https://www.example.com/image1.jpg"
              />
              <FormikInput
                name="images"
                label="Images"
                placeholder="https://www.example.com/image1.jpg, https://www.example.com/image2.jpg"
              />

              <div>
                <button type="submit" className="btn btn-primary ">
                  Ürünü Ekle
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddProduct;
