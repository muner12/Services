import path from '../images/path.png'
import man from '../images/man.png'
import email from '../images/Emailone.png'
import telephone from '../images/telephone.png'
import circle from '../images/circle.png'
import elect from '../images/elect.png'
import location from '../images/location.png'
import mbl from '../images/mbl.png'
import { BiEdit } from 'react-icons/bi'

 const contractorDetailData=[
    {
        img:path,
        text:'WPM'
    },
    {
        img:location,
        text:'Peshawar, KPK, Pakistan'
    },
    {
        img:man,
        text:'Muneer'
    },
    {
        img:telephone,
        text:'+445849528'
    },
    {
        img:mbl,
        text:'03405849528'
    },
    {
        img:email,
        text:'farooqsaeed997@gmail.com'
    },
    {
        img:circle,
        text:<p className='bg-[#38bf67] text-white px-3 py-[2px] rounded-full'>Approved</p>,
        icons:<div className='bg-[#38bf67] ml-12 rounded-sm text-white font-bold p-1'><BiEdit/></div>
    },
    {
        img:elect,
        text:'Electrician'
    }
]

export default  contractorDetailData;



