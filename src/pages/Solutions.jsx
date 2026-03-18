import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SolutionsPage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/Services", { replace: true });
  }, [navigate]);
  return null;
}
