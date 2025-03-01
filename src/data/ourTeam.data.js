import MrPrakash from "../../staticFiles/ourTeams/mrPrakashV.jpeg";
import MrSuhas from "../../staticFiles/ourTeams/mrSuhas.jpg";
import msLincy from "../../staticFiles/ourTeams/missLincy.jpg";
import msGreeshma from "../../staticFiles/ourTeams/missGreeshma.jpg";
import msManjula from "../../staticFiles/ourTeams/missManjula.jpg";
import FrThomasMJ from "../../staticFiles/ourTeams/FrThomasMJ.jpg";
import FrDrShaijuJoseph from "../../staticFiles/ourTeams/FrDrShaijuJoseph.jpg";

const faculty = [
    {
        name: "Rev. Fr. Dr. Thomas MJ",
        role: "Principal",
        image: FrThomasMJ,
        linkedin: "https://www.linkedin.com/in/thomas-mj-5649b1137/",
    },
    {
        name: "Rev. Fr. Dr. Shaiju Joseph",
        role: "Vice Principal & Adminisrator",
        image: FrDrShaijuJoseph,
        linkedin: "https://www.linkedin.com/in/shaiju-joseph-977b8449/",
    },
    {
        name: "Mr Prakash V",
        role: "Assistant Professor & In-Charge <br> Department of Computer Science",
        image: MrPrakash,
        linkedin: "https://www.linkedin.com/in/prakash88/",
    },
    {
        name: "Ms. Greeshma V.S.",
        role: "Assistant Professor <br> Department of Computer Science",
        image: msGreeshma,
        linkedin: "https://www.linkedin.com/in/greeshma-vs-7b074bba/",
    },
    {
        name: "Ms.Manjula S",
        role: "Assistant Professor <br> Department of Computer Science",
        image: msManjula,
        linkedin: "https://www.linkedin.com/in/manjula-s-458a74353",
    },
    {
        name: "Mr. Suhas Aithal V",
        role: "Assistant Professor <br> Department of Computer Science",
        image: MrSuhas,
        linkedin: "https://www.linkedin.com/in/suhas-aithal-v-834511b4/",
    },
    {
        name: "Ms Lincy J",
        role: "Assistant Professor <br> Department of Computer Science",
        image: msLincy,
        linkedin: "https://www.linkedin.com/in/lincy-joseph-a81134174",
    }
]

const advisoryBoardMembers = [
    {
        name: "Dr. Babu V",
        role: "Head, Department of Commerce and Management, and IQAC Coordinator"
    },
    {
        name: "Dr. Shailaja M",
        role: "Head, Department of Humanities"
    },
    {
        name: "Dr. Prashanth V",
        role: "Head, PG Department of Journalism and Mass Communication"
    },
    {
        name: "Dr. Trapty Sharma",
        role: "In-charge, Department of Languages"
    },
    {
        name: "Ms. Mridula V Kulkarni",
        role: "Co-ordinator, PG Department of Psychology"
    },

]

const contacts = [
    {
        name: "Mr Prakash V",
        tell: "+91 9535858730"
    },
    {
        name: "Ms Lincy J",
        tell: "+91 9738710164"
    },
    {
        name: "Mr. Suhas Aithal V",
        tell: "+91 9738291164"
    },
]

export {
    faculty as organizingTeam,
    advisoryBoardMembers as advisoryBoard,
    contacts as contact,
}