import { useState, useRef } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Swal from "sweetalert2";
import { Container, Title, Description, Label } from "../styles/Container";
import Form from "react-bootstrap/Form";

function CreateAsset() {
  const [certValue, setCertValue] = useState<string>("");
  const [idValue, setIdValue] = useState<string>("");
  const [colorValue, setColerValue] = useState<string>("");
  const [sizeValue, setSizeValue] = useState<number>();
  const [ownerValue, setOwnerValue] = useState<string>("");
  const [value, setValue] = useState<number>();
  const [makerValue, setMakerValue] = useState<string>();
  const [yearValue, setYearValue] = useState<number>();
  const [imageUrl, setImageUrl] = useState<any>(null);

  const onChangeCert = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCertValue((e.target as HTMLInputElement).value);
  };

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdValue((e.target as HTMLInputElement).value);
  };

  const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColerValue((e.target as HTMLInputElement).value);
  };

  const onChangeSize = (e: { target: { value: string } }): void => {
    setSizeValue(Number(e.target.value));
  };

  const onChangeOwner = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOwnerValue((e.target as HTMLInputElement).value);
  };

  const onChangeValue = (e: { target: { value: string } }): void => {
    setValue(Number(e.target.value));
  };

  const onChangeMaker = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMakerValue((e.target as HTMLInputElement).value);
  };

  const onChangeYear = (e: { target: { value: string } }): void => {
    setYearValue(Number(e.target.value));
  };

  const imgRef = useRef<any>();
  const onChangeImage = () => {
    const reader = new FileReader();
    const file = imgRef.current.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
  };

  const onClickFileBtn = () => {
    imgRef.current.click();
  };

  const onClickCreateAsset = async () => {
    let body = {
      cert: certValue,
      id: idValue,
      color: colorValue,
      size: sizeValue,
      owner: ownerValue,
      value: value,
      maker: makerValue,
      year: yearValue,
      image: imageUrl,
    };

    let closetAdd = await axios.post("http://localhost:8080/asset/", body);

    if (closetAdd.data.result === "failed") {
      Swal.fire({
        title: "?????? ????????? ?????? ?????? ????????? !",
        text: "????????? ????????? ???????????????! ex) ?????????1, ?????????2",
        icon: "warning",
        confirmButtonText: "??????",
        confirmButtonColor: "#790",
      });
    } else if (closetAdd.data === "noCert") {
      Swal.fire({
        title: "?????? ?????? ?????? ??????????????? !",
        text: "?????? ????????? ?????? ?????????????????? !",
        icon: "error",
        confirmButtonText: "??????",
        confirmButtonColor: "#910",
      });
    } else {
      Swal.fire({
        title: "??? ?????? ?????? ! ???? ????",
        icon: "success",
        confirmButtonText: "??????",
        confirmButtonColor: "#0d6efd",
      });
    }
  };

  return (
    <Container top="50%">
      <br />
      <Title color="#0d6efd">??? ????????????</Title>
      <Description color="#555" borderBottom="3px solid #0d6efd;">
        ???????????? ????????? ?????? ????????? ???????????????!
      </Description>
      <br />
      <br />
      <Row>
        <Col>
          <Label>?????? ?????? (?????????)</Label>
          <input type="text" className="form-control" onChange={onChangeCert} />
          <br />
          <Label>????????? ?????? ?????? (??????)</Label>
          <input type="text" className="form-control" onChange={onChangeId} />
          <br />
        </Col>
        <Col>
          <Label>??? ?????? ??????</Label>
          <input
            type="text"
            className="form-control"
            onChange={onChangeOwner}
            style={{ width: "200px" }}
          />
          <br />
          <Label>????????? (?????????)</Label>
          <input
            type="text"
            className="form-control"
            onChange={onChangeMaker}
            style={{ width: "200px" }}
          />
          <br />
        </Col>
      </Row>
      <Row>
        <Col>
          <Label>?????????</Label>
          <input
            type="number"
            className="form-control"
            onChange={onChangeSize}
          />
          <br />
          <Label>?????? ??????</Label>
          <input
            type="number"
            className="form-control"
            onChange={onChangeYear}
          />
          <br />
        </Col>
        <Col>
          <Label>??????</Label>
          <input
            type="text"
            className="form-control"
            onChange={onChangeColor}
          />
          <br />
          <Label>??????</Label>
          <input
            type="number"
            className="form-control"
            onChange={onChangeValue}
          />
          <br />
        </Col>
        <Col>
          <Label>??? ??????</Label>
          <Form.Group controlId="formFile" className="mb-3">
            <img
              src={imageUrl ? imageUrl : "profile.jpg"}
              width="70"
              height="70"
              alt=""
            />
            <br />
            <input
              type="file"
              ref={imgRef}
              onChange={onChangeImage}
              style={{ display: "none" }}
            />
            <br />
            <button
              onClick={() => {
                onClickFileBtn();
              }}
              style={{
                backgroundColor: "#0d6efd",
                borderRadius: "5px",
                borderColor: "#0d6efd",
                color: "#fff",
                padding: "3px",
                float: "left",
              }}
            >
              ?????? ?????????
            </button>
          </Form.Group>
          <br />
        </Col>
      </Row>
      <br />
      <button className="btn btn-primary" onClick={onClickCreateAsset}>
        ??? ????????????
      </button>
    </Container>
  );
}

export default CreateAsset;
