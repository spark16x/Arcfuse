"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function login() {
  let route = useRouter()
  return (<div onClick={route.push('/signup')}>Login</div>)
}