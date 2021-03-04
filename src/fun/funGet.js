import { FakeContent } from "../FakeContent/FakeContent"



export const getDatos = async () => {
    try {
        // const res = await fetch(FakeContent).json()
        // console.log( res )
        return FakeContent
    } catch (error) {
        console.log(error)
    }
}


