// External Library Import
import { FlashList } from "@shopify/flash-list";
import { SafeAreaView } from "react-native";
import React from "react";
// Internal Library Import
import { useGetBlogsQuery } from "services";
import { Loader } from "components/core";
import { ProductsDataType } from "types";
import { AppBar, Card } from "components";

const Home = () => {
  const { data, isLoading } = useGetBlogsQuery(undefined);
  const m = 2;
  // console.log("data", data);
  const renderItem = ({ item }: { item: ProductsDataType }) => {
    // Render each item here
    return <Card item={item} />;
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppBar />
      {isLoading ? (
        <Loader />
      ) : (
        <FlashList
          data={data?.products}
          estimatedItemSize={50}
          renderItem={renderItem}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
