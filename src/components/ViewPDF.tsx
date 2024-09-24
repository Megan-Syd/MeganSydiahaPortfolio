// import React from "react";

const ViewPDF = () => {
  const openPdf = () => {
    window.open("/assets/MeganSydiahaCV0924.pdf", "_blank");
  };

  return (
    <div>
      <button
        className="btn btn-light mt-4"
        style={{
          borderColor: "#da879c",
          borderWidth: "medium",
          color: "#6b8093",
        }}
        title="View CV in browser"
        onClick={openPdf}
      >
        View my CV
      </button>
    </div>
  );
};

export default ViewPDF;
