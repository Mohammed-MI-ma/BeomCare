import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import axios from "axios";
import CenteredFlexComponent from "../../Components/Utilities/CenteredFlexComponent";
import { Breadcrumb, Button, Input } from "antd";
import { useTranslation } from "react-i18next";
import useFontFamily from "../../Utilities/useFontFamily";
import { CustomDivider } from "../LoginPage";
import ResponsiveGrid from "./ResponsiveGrid";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState({ name: "", description: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fontFamilyLight = useFontFamily("Light");
  const fontFamilyBold = useFontFamily("SemiBold");

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_API_URI_DEV}api/application/category/${categoryId}`
        );
        setCategory(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [categoryId]);

  const renderContent = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <>
        <section
          className="bg-cover shadow-lg bg-gray-200 mb-5 flex items-center justify-center flex-col-reverse lg:flex-row w-full"
          style={{
            width: "99vw",
            margin: 0,
            color: "white",
            height: "200px",
            position: "relative",
          }}
        />
        <p>{category.description}</p>
      </>
    );
  };

  return (
    <>
      <Helmet>
        <title>
          {!loading ? category.data?.name : "Loading..."} - BeomCare
        </title>
        <meta name="description" content={category.data?.description} />
      </Helmet>
      <section
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <section id="main-content" className="flex items-center flex-col">
          {renderContent()}
        </section>
        {category.data?.description}
        <CustomDivider />
        <h1 style={{ fontFamily: fontFamilyBold, fontSize: "20px" }}>
          Réserver en ligne un RDV avec {category.data?.name}
        </h1>
        <div className="grid grid-cols-1 shadow-lg md:grid-cols-3 bg-white gap-5 p-5 rounded-lg text-center">
          <CenteredFlexComponent
            style={{ flexDirection: "column", alignItems: "start" }}
          >
            <p style={{ color: "#5A5A5A", fontSize: "12px" }}>
              Que cherchez-vous ?
            </p>
            <Input
              placeholder="Nom du salon, prestations"
              style={{ fontFamily: fontFamilyLight }}
            />
          </CenteredFlexComponent>
          <CenteredFlexComponent
            style={{ flexDirection: "column", alignItems: "start" }}
          >
            <p style={{ color: "#5A5A5A", fontSize: "12px" }}>Où</p>
            <Input
              placeholder="Adresse, ville..."
              style={{ fontFamily: fontFamilyLight }}
            />
          </CenteredFlexComponent>
          <Button
            size="large"
            style={{
              background: "var(--color-primary)",
              fontFamily: fontFamilyLight,
              fontSize: "13px",
              height: "100%",
            }}
          >
            Rechercher
          </Button>
        </div>
        <div className="w-full">
          <Breadcrumb
            style={{ fontFamily: fontFamilyLight }}
            items={[
              {
                title: "Acceuil",
              },
              {
                title: (
                  <bold>
                    <p>{category?.data?.name}</p>
                  </bold>
                ),
              },
            ]}
          />
        </div>
        <ResponsiveGrid />
        <Button
          size="large"
          style={{
            background: "var(--color-primary)",
            fontFamily: fontFamilyLight,
            fontSize: "13px",
            height: "100%",
          }}
        >
          Voir plus de villes
        </Button>
      </section>
    </>
  );
};

export default CategoryPage;
