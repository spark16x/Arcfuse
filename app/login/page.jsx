"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function login() {
  let route = useRouter()
  return (<div onclick={route.push('/signup')}>Signup</div>)
}