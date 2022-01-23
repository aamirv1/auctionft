import { MainContainer } from "../../../container/MainContainer";
import { RightBar } from "../../../container/Rightbar";
import { Content } from "../../../container/Content";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useNFT } from "../../../components/Provider/NFTProvider";

export default function Home() {
  const router = useRouter();

  const [token, setToken] = useState(null);

  const { asset, getAsset } = useNFT();

  useEffect(() => {
    if (router.query.tokenAddress && router.query.tokenId) {
      setToken({
        tokenAddress: router.query.tokenAddress,
        tokenId: router.query.tokenId,
      });
    }
  }, [router.query.tokenAddress, router.query.tokenId]);

  useEffect(() => {
    if (token) {
      getAsset(token.tokenAddress, token.tokenId);
    }
  }, [token]);

  return (
    <MainContainer>
      {asset && (
        <>
          <Content w="calc(80% - 15rem)" />
          <RightBar w={"20%"} />
        </>
      )}
    </MainContainer>
  );
}
