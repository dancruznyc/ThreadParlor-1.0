import React, { useState } from "react";
import "./LookBook.css";

const LookBook = () => {
  const [imgSelected, setImgSelected] = useState(
    "https://live.staticflickr.com/65535/52027348210_d7939a085d_h.jpg"
  );

  function gallerySelector(e) {
    console.log(e.target.src);
    setImgSelected(e.target.src);
  }
  return (
    <section className="lookbook--container">
      <h1 className="lookbook--title">Look Book 2023</h1>

      <div className="lookbook--selected-img">
        <img src={imgSelected} />
      </div>

      <div className="lookbook--gallery" onClick={gallerySelector}>
        <div>
          <img
            src="https://live.staticflickr.com/65535/52026871868_5a1f771321_h.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://live.staticflickr.com/65535/52027348210_d7939a085d_h.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://live.staticflickr.com/65535/52026833006_91bf44c866_h.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://live.staticflickr.com/65535/52027078914_5908e6463b_h.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://live.staticflickr.com/65535/52025794552_2d5a28448e_h.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://live.staticflickr.com/65535/52027074929_db6b85ab13_h.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://live.staticflickr.com/65535/52027345115_87e58ee4bf_h.jpg"
            alt=""
          />
        </div>
        <div>
          {" "}
          <img
            src="https://live.staticflickr.com/65535/52026871868_5a1f771321_h.jpg"
            alt=""
          />
        </div>
        <div>
          {" "}
          <img
            src="https://live.staticflickr.com/65535/52027348210_d7939a085d_h.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://live.staticflickr.com/65535/52026833006_91bf44c866_h.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://live.staticflickr.com/65535/52027078914_5908e6463b_h.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://live.staticflickr.com/65535/52025794552_2d5a28448e_h.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://live.staticflickr.com/65535/52027074929_db6b85ab13_h.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://live.staticflickr.com/65535/52027345115_87e58ee4bf_h.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default LookBook;
