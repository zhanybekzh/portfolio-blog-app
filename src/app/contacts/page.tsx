import React from "react";

const contacts = () => {
  return (
    <div className="container">
      <div className="row mb-4 mt-3">
        <h1 className="col-12 mb-4">Напишите мне</h1>
        <p>
          Напишите мне на {" "}<a className="link" href="mailto:zh.zhanybek@gmail.com">
             эл.почту
          </a>{" "} либо заполните форму ниже и расскажите о своей задаче.
        </p>
        <p>
          Я свяжусь с вами в ближайшее время, отвечу на Ваши вопросы и предложу
          решение.
        </p>
      </div>
      <div className="row">
        <div className="col-12">
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-xl"
                placeholder="Ваше имя"
                aria-label="name"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control form-control-xl"
                type="text"
                placeholder="Организация"
                aria-label="organization name"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control form-control-xl"
                type="text"
                placeholder="Контактный номер"
                aria-label="phone number"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control form-control-xl"
                type="text"
                placeholder="E-mail"
                aria-label="email"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control form-control-xl"
                id="exampleFormControlTextarea1"
                rows={5}
                placeholder="Более подробное описание Вашей задачи или вопроса"
                defaultValue={""}
              />
            </div>
            <button className="mb-4 btn btn-primary" type="submit">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contacts;
