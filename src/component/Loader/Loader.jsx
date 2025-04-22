import { Oval } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
