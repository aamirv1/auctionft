import React, { useContext, useState } from "react";
import { OpenSeaService } from "../../services/opensea";

export const NFTContext = React.createContext();

export const NFProvider = ({ children, ...props }) => {
  const [order, setOrder] = useState(null);

  const [asset, setAsset] = useState(null);

  const getAsset = async (tokenAddress, tokenId) => {
    if (order) {
      const asset = order.orders.find(
        (item) =>
          item.metadata.asset.address === tokenAddress &&
          item.metadata.asset.id === tokenId
      );

      setAsset(asset ?? null);
    } else {
      try {
        const response = await OpenSeaService.getAsset(tokenAddress, tokenId);
        setAsset(response);
      } catch (e) {
        console.log(e);
        setAsset(null);
      }
    }
  };

  return (
    <NFTContext.Provider value={{ asset, getAsset, order, setOrder }}>
      {children}
    </NFTContext.Provider>
  );
};

export const useNFT = () => {
  return useContext(NFTContext);
};
