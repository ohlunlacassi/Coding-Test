import { useState, useEffect } from "react";
import Flex from "../components/Layout/Flex";
import Hero from "../components/Layout/Hero";
import Card from "../components/Layout/Card";
import Grid from "../components/Layout/Grid";
import CardItem from "../components/Layout/CardItem";

export default function App() {
  const [company, setCompany] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://stockradars.co/assignment/data.php",
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCompany(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <Flex>
      <Hero />
      <Grid>
        {company.map((item, index) => (
          <Card key={index}>
            <CardItem
              fullname={item.N_fullname}
              company={item.N_COMPANY_E}
              url={item.N_URL}
              businessType={item.N_BUSINESS_TYPE_E}
            />
          </Card>
        ))}
      </Grid>
    </Flex>
  );
}
