import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password, firstName, lastName, phone } = await request.json();

  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/register`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        firstname: firstName,
        lastname: lastName,
        phone: phone.toString(),
        image: "image",
      }),
    });

    if (response.ok) {
      const data = await response.json();

      return NextResponse.json({ message: "Signup successful!", data });
    } else {
      const errorData = await response.json();
      return NextResponse.json(
        { message: errorData.message },
        { status: response.status }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!", error },
      { status: 500 }
    );
  }
}
