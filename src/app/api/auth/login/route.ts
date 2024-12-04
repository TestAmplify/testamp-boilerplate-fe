import { NextResponse } from "next/server";
import axios, { AxiosResponse } from "axios";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`;

  try {
    const response: AxiosResponse = await axios.post(
      apiUrl,
      { email, password },
      {
        withCredentials: true, // Important to send and receive cookies
      }
    );

    return NextResponse.json({
      message: "Login successful!",
      data: response.data, // Axios automatically parses the response body
    });
  } catch (error: any) {
    const errorMessage = error.response
      ? error.response.data.message || "An error occurred while logging in."
      : "Network or server error occurred.";

    return NextResponse.json(
      { message: errorMessage, error },
      { status: error.response?.status || 400 }
    );
  }
}
