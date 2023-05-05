import React from "react";
import Union from "@/components/membership/union/unionMembersName.json";

const UnionMembersComponent=()=>{
    return(
        <div className={`union`}>
            <div>
                {
                    Union.map((member)=>(
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
                                                <button className={`card-btn`}>بیشتر</button>
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
    )
}
export default UnionMembersComponent;