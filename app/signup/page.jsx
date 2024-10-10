"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function signup() {
  let route=useRouter()
  return (<div onClick={route.push('/login')}>Signup</div>)
}