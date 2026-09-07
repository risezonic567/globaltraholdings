import Booking from "../models/Booking.js";

import razorpay from "../utils/razarpay.js";
import crypto from "crypto"
import transport from "../utils/nodemailer.js"


// export const sendBookingEmail = async (req, res) => {
//        console.log("🔥 SEND DETAILS API HIT");

//   try {
//     const { passengers, offerId } = req.body;

//     if (!passengers || passengers.length === 0) {
//       return res.status(400).json({
//         status: false,
//         message: "Passenger details are required",
//       });
//     }

//     const passengerHTML = passengers
//       .map(
//         (p, index) => `
//           <div style="margin-bottom:20px;padding:15px;border:1px solid #ddd;">
//             <h3>Passenger ${index + 1}</h3>

//             <p><strong>Type:</strong> ${p.type}</p>
//             <p><strong>Name:</strong> ${p.firstName} ${p.middleName || ""} ${p.lastName}</p>
//             <p><strong>Gender:</strong> ${p.gender}</p>
//             <p><strong>Date of Birth:</strong> ${p.dob}</p>
//             <p><strong>Nationality:</strong> ${p.nationality}</p>

//             ${
//               p.passport
//                 ? `
//                   <p><strong>Passport Number:</strong> ${p.passport.number}</p>
//                   <p><strong>Passport Country:</strong> ${p.passport.country}</p>
//                   <p><strong>Passport Expiry:</strong> ${p.passport.expiry}</p>
//                 `
//                 : ""
//             }
//           </div>
//         `
//       )
//       .join("");

//     const mailOptions = {
//       from: process.env.USER_EMAIL,

//       // jis Gmail par booking details chahiye
//       to: process.env.USER_EMAIL,

//       subject: `New Flight Booking - ${offerId}`,

//       html: `
//         <div style="font-family:Arial,sans-serif">

//           <h2>New Flight Booking Request</h2>

//           <p>
//             <strong>Offer ID:</strong> ${offerId}
//           </p>

//           <hr />

//           ${passengerHTML}

//         </div>
//       `,
//     };

//     await transport.sendMail(mailOptions);

//     return res.status(200).json({
//       status: true,
//       message: "Booking details sent successfully",
//     });


//   } catch (error) {
//   console.error("❌ EMAIL ERROR:", error);

//   return res.status(500).json({
//     status: false,
//     message: error.message,
//   });
// }
// };


export const sendBookingEmail = async (req, res) => {
    console.log("🔥 SEND DETAILS API HIT");

    try {
        const {
            passengers,
            offerId,
            flight,
        } = req.body;

        console.log("🔥 PASSENGERS:", passengers);
        console.log("🔥 OFFER ID:", offerId);
        console.log("✈️ FLIGHT:", flight);

        // -----------------------------
        // Validate passengers
        // -----------------------------
        if (!passengers || passengers.length === 0) {
            return res.status(400).json({
                status: false,
                message: "Passenger details are required",
            });
        }

        // -----------------------------
        // Flight Details
        // -----------------------------
        const flightDate = flight?.date || "N/A";
        const flightName = flight?.flightName || "N/A";
        const flightNumber = flight?.flightNumber || "N/A";

        const fromAirport = flight?.from?.airport || "N/A";
        const fromCode = flight?.from?.code || "N/A";
        const departureTime = flight?.from?.time || "N/A";

        const toAirport = flight?.to?.airport || "N/A";
        const toCode = flight?.to?.code || "N/A";
        const arrivalTime = flight?.to?.time || "N/A";

        // -----------------------------
        // Passenger HTML
        // -----------------------------
        const passengerHTML = passengers
            .map(
                (p, index) => `
          <div style="
            margin-bottom:20px;
            padding:20px;
            border:1px solid #e5e7eb;
            border-radius:10px;
            background:#ffffff;
          ">

            <div style="
              display:flex;
              justify-content:space-between;
              align-items:center;
              margin-bottom:15px;
              border-bottom:1px solid #eee;
              padding-bottom:12px;
            ">

              <h3 style="
                margin:0;
                color:#111827;
                font-size:18px;
              ">
                Passenger ${index + 1}
              </h3>

              <span style="
                background:#eef2ff;
                color:#3730a3;
                padding:5px 10px;
                border-radius:20px;
                font-size:12px;
                font-weight:bold;
              ">
                ${p.type || "Passenger"}
              </span>

            </div>

            <table width="100%" cellpadding="6" cellspacing="0">

              <tr>
                <td width="50%">
                  <strong style="color:#6b7280;">Full Name</strong><br/>
                  <span style="color:#111827;">
                    ${p.firstName || ""} 
                    ${p.middleName || ""} 
                    ${p.lastName || ""}
                  </span>
                </td>

                <td width="50%">
                  <strong style="color:#6b7280;">Gender</strong><br/>
                  <span style="color:#111827;">
                    ${p.gender || "N/A"}
                  </span>
                </td>
              </tr>

              <tr>
                <td>
                  <strong style="color:#6b7280;">Date of Birth</strong><br/>
                  <span style="color:#111827;">
                    ${p.dob || "N/A"}
                  </span>
                </td>

                <td>
                  <strong style="color:#6b7280;">Nationality</strong><br/>
                  <span style="color:#111827;">
                    ${p.nationality || "N/A"}
                  </span>
                </td>
              </tr>

              <tr> <td width="50%"> <strong style="color:#6b7280;">Phone Number</strong><br/> <span style="color:#111827;"> ${p.phone || "N/A"} </span> </td> <td width="50%"> <strong style="color:#6b7280;">Email Address</strong><br/> <span style="color:#111827;"> ${p.email || "N/A"} </span> </td> </tr>

            </table>

            ${p.passport
                        ? `
                  <div style="
                    margin-top:15px;
                    padding:15px;
                    background:#f9fafb;
                    border-radius:8px;
                  ">

                    <strong style="
                      color:#111827;
                      display:block;
                      margin-bottom:10px;
                    ">
                      Passport Information
                    </strong>

                    <table width="100%" cellpadding="5">

                      <tr>
                        <td width="33%">
                          <span style="color:#6b7280;">
                            Passport Number
                          </span>
                          <br/>
                          <strong>
                            ${p.passport.number || "N/A"}
                          </strong>
                        </td>

                        <td width="33%">
                          <span style="color:#6b7280;">
                            Country
                          </span>
                          <br/>
                          <strong>
                            ${p.passport.country || "N/A"}
                          </strong>
                        </td>

                        <td width="33%">
                          <span style="color:#6b7280;">
                            Expiry
                          </span>
                          <br/>
                          <strong>
                            ${p.passport.expiry || "N/A"}
                          </strong>
                        </td>
                      </tr>

                    </table>

                  </div>
                `
                        : ""
                    }

          </div>
        `
            )
            .join("");

        // -----------------------------
        // Email
        // -----------------------------
        const mailOptions = {
            from: process.env.USER_EMAIL,

            to: process.env.USER_EMAIL,

            subject: `✈️ New Flight Booking - ${fromCode} to ${toCode}`,

            html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

<body style="
  margin:0;
  padding:0;
  background:#f3f4f6;
  font-family:Arial,Helvetica,sans-serif;
">

  <div style="
    max-width:700px;
    margin:30px auto;
    background:#ffffff;
    border-radius:14px;
    overflow:hidden;
    box-shadow:0 4px 15px rgba(0,0,0,0.08);
  ">

    <!-- HEADER -->
    <div style="
      background:#111827;
      padding:25px;
      text-align:center;
    ">

      <h1 style="
        color:#ffffff;
        margin:0;
        font-size:25px;
      ">
        ✈️ New Flight Booking
      </h1>

      <p style="
        color:#d1d5db;
        margin:8px 0 0;
        font-size:14px;
      ">
        New booking request received
      </p>

    </div>


    <!-- BOOKING ID -->
    <div style="
      padding:20px 25px;
      border-bottom:1px solid #eee;
    ">

      <p style="
        margin:0;
        color:#6b7280;
        font-size:13px;
      ">
        Booking / Offer ID
      </p>

      <p style="
        margin:5px 0 0;
        font-size:16px;
        font-weight:bold;
        color:#111827;
      ">
        ${offerId || "N/A"}
      </p>

    </div>


    <!-- FLIGHT SUMMARY -->
    <div style="padding:25px;">

      <h2 style="
        margin:0 0 18px;
        color:#111827;
        font-size:20px;
      ">
        Flight Details
      </h2>


      <!-- AIRLINE -->
      <div style="
        background:#f9fafb;
        padding:15px;
        border-radius:10px;
        margin-bottom:15px;
      ">

        <table width="100%" cellpadding="0" cellspacing="0">

          <tr>

            <td width="60%">

              <div style="
                font-size:17px;
                font-weight:bold;
                color:#111827;
              ">
                ${flightName}
              </div>

              <div style="
                margin-top:5px;
                color:#6b7280;
                font-size:13px;
              ">
                Flight No: ${flightNumber}
              </div>

            </td>

            <td width="40%" style="text-align:right;">

              <div style="
                color:#6b7280;
                font-size:12px;
              ">
                Travel Date
              </div>

              <div style="
                margin-top:4px;
                font-weight:bold;
                color:#111827;
              ">
                ${flightDate}
              </div>

            </td>

          </tr>

        </table>

      </div>


      <!-- ROUTE -->
      <div style="
        border:1px solid #e5e7eb;
        border-radius:12px;
        padding:20px;
      ">

        <table width="100%" cellpadding="0" cellspacing="0">

          <tr>

            <!-- FROM -->
            <td width="40%" style="vertical-align:top;">

              <div style="
                font-size:28px;
                font-weight:bold;
                color:#111827;
              ">
                ${fromCode}
              </div>

              <div style="
                margin-top:5px;
                font-size:13px;
                color:#6b7280;
              ">
                ${fromAirport}
              </div>

              <div style="
                margin-top:10px;
                font-size:16px;
                font-weight:bold;
                color:#111827;
              ">
                ${departureTime}
              </div>

              <div style="
                margin-top:3px;
                font-size:12px;
                color:#6b7280;
              ">
                Departure
              </div>

            </td>


            <!-- ARROW -->
            <td width="20%" style="
              text-align:center;
              vertical-align:middle;
            ">

              <div style="
                font-size:25px;
                color:#6b7280;
              ">
                ✈️
              </div>

              <div style="
                height:1px;
                background:#d1d5db;
                margin-top:8px;
              "></div>

            </td>


            <!-- TO -->
            <td width="40%" style="
              text-align:right;
              vertical-align:top;
            ">

              <div style="
                font-size:28px;
                font-weight:bold;
                color:#111827;
              ">
                ${toCode}
              </div>

              <div style="
                margin-top:5px;
                font-size:13px;
                color:#6b7280;
              ">
                ${toAirport}
              </div>

              <div style="
                margin-top:10px;
                font-size:16px;
                font-weight:bold;
                color:#111827;
              ">
                ${arrivalTime}
              </div>

              <div style="
                margin-top:3px;
                font-size:12px;
                color:#6b7280;
              ">
                Arrival
              </div>

            </td>

          </tr>

        </table>

      </div>

    </div>


    <!-- PASSENGERS -->
    <div style="
      padding:0 25px 25px;
    ">

      <h2 style="
        margin:0 0 18px;
        color:#111827;
        font-size:20px;
      ">
        Passenger Details
      </h2>

      ${passengerHTML}

    </div>


    <!-- FOOTER -->
    <div style="
      background:#f9fafb;
      padding:20px 25px;
      text-align:center;
      border-top:1px solid #eee;
    ">

      <p style="
        margin:0;
        color:#6b7280;
        font-size:13px;
      ">
        This booking request was submitted through your website.
      </p>

      <p style="
        margin:8px 0 0;
        color:#9ca3af;
        font-size:12px;
      ">
        Please review the passenger and flight details before processing.
      </p>

    </div>

  </div>

</body>
</html>
      `,
        };

        // -----------------------------
        // SEND EMAIL
        // -----------------------------
        await transport.sendMail(mailOptions);

        return res.status(200).json({
            status: true,
            message: "Booking details sent successfully",
        });

    } catch (error) {
        console.error("❌ EMAIL ERROR:", error);

        return res.status(500).json({
            status: false,
            message: error.message,
        });
    }
};


export let createRazorpayOrder = async (req, resp) => {
    try {

        let { passengers, offerId } = req.body;

        // console.log(passengers, offerId)

        //  revalidate offer
        let response = await fetch(
            `https://api.duffel.com/air/offers/${offerId}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.DUFFEL_API}`,
                    "Content-Type": "application/json",
                    "Duffel-Version": "v2",
                },
            }
        );

        response = await response.json();

        //  expired
        if (!response.data) {
            return resp.status(400).json({
                status: false,
                message: "Offer expired",
            });
        }

        //  total amount
        let amount = Number(response.data.total_amount);

        //  create razorpay order
        let options = {
            amount: Math.round(amount * 100),

            currency: response.data.total_currency,

            receipt: `receipt_${Date.now()}`,

            notes: {
                userId: req.user.id,
                purpose: "Flight Booking Payment",
            },
        };

        let order = await razorpay.orders.create(options);

        // save temp booking in database
        let paymentData = await Booking.create({
            userId: req.user.id,
            offerPassengers:
                response.data.passengers,

            offerId,

            amount: 100,

            currency: response.data.total_currency,

            razorpay_order_id: order.id,

            paymentStatus: "pending",

            bookingStatus: "pending",

            passengers,

            expiresAt: new Date(
                Date.now() + 15 * 60 * 1000
            ),
        });

        resp.status(200).json({
            status: true,

            key: process.env.RAZORPAY_KEY_ID,

            amount: order.amount,

            currency: order.currency,

            orderId: order.id,

            bookingId: paymentData._id,

            order,
        });

    } catch (error) {

        resp.status(500).json({
            status: false,
            message: "Failed to create payment",
            error: error.message,
        });
    }
};

// to verify the payment and create duffel order confirm booking;

export let verifybooking = async (req, resp) => {
    try {
        let { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingId } = req.body;
        let booking = await Booking.findById(bookingId);
        if (!booking) {
            return resp.send({
                message: "Booking Not Found",
                status: false
            })
        }

        if (booking.paymentStatus === "paid") {
            return resp.send({
                message: "Payment Already Verified",
                status: false
            })
        }

        let expectedSignature = razorpay_order_id + "|" + razorpay_payment_id
        let sign = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(expectedSignature)
            .digest("hex")

        let isValid = razorpay_signature === sign

        if (!isValid) {
            return resp.json({
                status: false,
                message: `Invalid Payment Signature ${process.env.RAZORPAY_KEY_SECRET}`
            })
        }

        booking.paymentStatus = "paid"
        booking.razorpay_payment_id = razorpay_payment_id,
            booking.razorpay_signature = razorpay_signature
        await booking.save()

        const formattedPassengers =
            booking.passengers.map(
                (p, index) => {

                    const offerPassenger =
                        booking.offerPassengers?.[
                        index
                        ];

                    const passenger = {

                        // 🔥 REQUIRED
                        id: offerPassenger?.id,

                        type: p.type,

                        title:
                            p.gender === "M"
                                ? "mr"
                                : "ms",

                        given_name:
                            p.firstName,

                        family_name:
                            p.lastName,

                        gender:
                            p.gender.toLowerCase(),

                        born_on:
                            new Date(p.dob)
                                .toISOString()
                                .split("T")[0],

                        // 🔥 REQUIRED
                        email:
                            req.user.email,

                        // 🔥 REQUIRED
                        phone_number:
                            "+919999999999",
                    };

                    //  passport
                    if (
                        p.passport &&
                        p.passport.number
                    ) {

                        passenger.identity_documents =
                            [
                                {
                                    type:
                                        "passport",

                                    number:
                                        p.passport
                                            .number,

                                    expiry_date:
                                        new Date(
                                            p.passport
                                                .expiry
                                        )
                                            .toISOString()
                                            .split(
                                                "T"
                                            )[0],

                                    issuing_country_code:
                                        p.passport
                                            .country,
                                },
                            ];
                    }

                    return passenger;
                }
            );

        let duffelResponse = await fetch(
            "https://api.duffel.com/air/orders",
            {
                method: "POST",

                headers: {
                    Authorization: `Bearer ${process.env.DUFFEL_API}`,

                    "Duffel-Version": "v2",

                    "Content-Type":
                        "application/json",
                },

                body: JSON.stringify({
                    data: {

                        type: "instant",

                        selected_offers: [
                            booking.offerId,
                        ],

                        passengers:
                            formattedPassengers,

                        payments: [
                            {
                                type: "balance",

                                amount:
                                    booking.amount.toString(),

                                currency: booking.currency,
                            },
                        ],
                    },
                }),
            }
        );

        duffelResponse = await duffelResponse.json();
        if (duffelResponse.errors) {

            booking.bookingStatus = "failed";

            booking.duffelResponse =
                duffelResponse;

            await booking.save();

            return resp.status(400).json({
                status: false,
                message: "Duffel booking failed",
                errors: duffelResponse.errors,
            });
        }

        booking.bookingStatus =
            "confirmed";

        booking.orderId =
            duffelResponse.data.id;

        booking.pnr =
            duffelResponse.data.booking_reference;

        booking.airlinePnr =
            duffelResponse.data.slices?.[0]
                ?.segments?.[0]
                ?.operating_carrier_reference ||
            null;

        booking.duffelResponse =
            duffelResponse.data;

        await booking.save();

        // ==========================================
        //  SUCCESS RESPONSE
        // ==========================================

        resp.status(200).json({
            status: true,

            message:
                "Flight booked successfully",

            bookingId: booking._id,

            orderId: booking.orderId,

            pnr: booking.pnr,

            booking,
        });

    } catch (error) {
        resp.status(500).json({
            status: false,
            message: "Failed to create payment",
            error: error.message,
        });
    }
}

