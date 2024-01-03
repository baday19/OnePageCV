import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { useEffect } from "react";
import request from "@/utils/request"

const Index = () => {
  const navigate = useNavigate()

  // useEffect(()=>{
  //   request.POST('/api/v1/user/', {id:'1'}).then(res=>{
  //     console.log(res)
  //   })
  // }, [])

  const toMine = (id: Number) => {
    navigate('/mine', {
      state: {id}
    })
  }

  return (
    <Container>
      <div onClick={() => toMine(1)}>2</div>
    </Container>
  )
}

export default Index