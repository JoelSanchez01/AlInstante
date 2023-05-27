import styled from "styled-components";

const ModalEliminar = ({ children }) => {
  return (
    <>
      <Overlay>
        <ContenedorModal>
          <BotonCerrar>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </BotonCerrar>
          <Contenido>
            <p>¿Está seguro de eliminar esta noticia?</p>
            <BotonSi>Si</BotonSi>
            <BotonNo>No</BotonNo>
          </Contenido>
        </ContenedorModal>
      </Overlay>
    </>
  );
};

export default ModalEliminar;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContenedorModal = styled.div`
  width: 500px;
  min-height: 200px;
  background: #f2f2f2;
  position: relative;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
`;

const BotonCerrar = styled.button`
  position: relative;
  left: 90%;
  width: 9%;
  height: 10%;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  color: #171717;

  &:hover {
    background: #f2f2f2;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Boton1 = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
const Boton = styled.button`
  display: block;
  padding: 10px 30px;
`;

const BotonSi = styled.button`
  position: absolute;
  top: 60%;
  left: 100px;
  width: 100px;
  height: 30px;
  border: none;
  background: #ef5050;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease all;
  color: #171717;
`;
const BotonNo = styled.button`
  position: absolute;
  top: 60%;
  right: 100px;
  backgroud: #ef5050;
  width: 100px;
  height: 30px;
  background: #d9d9d9;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease all;
  color: #171717;
`;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;
