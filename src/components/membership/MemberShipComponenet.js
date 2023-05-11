import React from "react";
import MemberShips from "./memberShipNames.json";
const MemberShipComponenet = ()=>{
    return(
        <div className={`membership`}>
                <div>
                    {
                        MemberShips.map((member)=>(
                            <>
                                <div className={`members-header`}>{member.departmentName}</div>
                                <div className={`members-list`}>
                                    {
                                        member.membersOfDepartment.map((child)=>(
                                            <>
                                                <div className={`card`}>
                                                    <img src="/image/user.jpeg" className={`card-image`}/>
                                                    <h4 className={`mt-5`}>{child.firstName+" "+child.lastName}</h4>
                                                    <p>{child.capacity}</p>
                                                </div>
                                            </>
                                        ))
                                    }
                                </div>
                            </>
                        ))
                    }
                </div>
        </div>
    );
}
export default MemberShipComponenet