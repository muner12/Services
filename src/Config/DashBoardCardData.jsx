// import { BsLaptop } from "react-icons/bs";
import img1 from '../images/warning (1).png'
import img2 from '../images/watch.png'
import img3 from '../images/notes.png'
import suitcase from '../images/suitcase.png'
// import { icons } from 'react-icons/lib'
import {BsFillCaretUpFill} from 'react-icons/bs'
import { AiOutlineCaretDown } from 'react-icons/ai'

suitcase



const DashBoardCardData=[
    {
        id:1,
        number:300,
        open:'Open Jobs',
        icons:suitcase
    },
    {
        id:2,
        number:"80%",
        time:'Response Time: 2hr',
        open:'Response Time',
        icons:img2,
        btn:<AiOutlineCaretDown className='text-[#38bf67]'/>
    },
    {
        id:3,
        number:'100%',
        open:'Open Clouser',
        time:'Jobs Close Time: 10 days',
        icons:img3,
        btn:<AiOutlineCaretDown className='text-[#fe1b1b]'/>
    }
    ,
    {
        id:4,
        icons:img1,
        comp:'Complience',
        Ncom:'Not-Complience',
        exp:'Expired',
        open:'Property Compliance',
        colon:':',
        percent:'25%'
        // icons:img3
    }

]

export default DashBoardCardData;