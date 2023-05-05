"use client"
import React from "react";
import UnionMembersComponent from "@/components/membership/union/UnionMembersComponent";

const UnionMembers=()=>{
    return(
        <div className={`container pt-20 px-10 mx-auto members  font-vazir`}>
            <UnionMembersComponent/>
        </div>
    )
}
export default  UnionMembers;