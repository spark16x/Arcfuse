"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function signup() {
  let route=useRouter()
  return (<div onclick={route.push('/login')}>Signup</div>)
}