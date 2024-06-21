import React from 'react'
import TeamMember from './TeamMember'
import boy1 from "./boy1.png"
import boy2 from "./boy2.png"
import boy4 from "./boy4.png"
import boy3 from "./boy3.jpg"
export default function Teamcontainer() {
  return (
    <div>
        <h1>Meet out Team </h1>

    <div className='Teamcontainer'>
        <TeamMember tname="John" timg={boy1} tdesignation="IT Manaager"></TeamMember>
        <TeamMember tname="RON" timg={boy2} tdesignation="Junior Software Developer"></TeamMember>
        <TeamMember tname="DEV" timg={boy3} tdesignation="Software Developer"></TeamMember>
        <TeamMember tname="Raman" timg={boy4} tdesignation="TEam Lead"></TeamMember>
    </div>

    </div>
  )
}
