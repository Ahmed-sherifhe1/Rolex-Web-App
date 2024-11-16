import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Error404() {
  let Navigate = useNavigate();
  useEffect(() => {
    Navigate("/error_404_rolex");
  }, []);
}
