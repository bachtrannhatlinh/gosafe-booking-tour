'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function FlightFlowTestPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [testData, setTestData] = useState({
    searchParams: {
      from: 'SGN',
      to: 'HAN', 
      departureDate: '2025-08-15',
      adults: 1,
      children: 0,
      infants: 0,
      class: 'economy',
      tripType: 'one-way'
    },
    selectedFlight: null,
    bookingData: null,
    paymentData: null
  })

  const testStep1_FlightSearch = () => {
    // Test tìm chuyến bay
    const queryParams = new URLSearchParams({
      from: testData.searchParams.from,
      to: testData.searchParams.to,
      departureDate: testData.searchParams.departureDate,
      adults: testData.searchParams.adults.toString(),
      children: testData.searchParams.children.toString(),
      infants: testData.searchParams.infants.toString(),
      class: testData.searchParams.class,
      tripType: testData.searchParams.tripType
    })

    // Mở trang tìm kiếm
    window.open(`/flights/search?${queryParams.toString()}`, '_blank')
    setStep(2)
  }

  const testStep2_SelectFlight = () => {
    // Giả lập việc chọn chuyến bay
    const mockSelectedFlight = {
      flight: {
        id: '1',
        flightNumber: 'VN123',
        airline: 'Vietnam Airlines',
        departureAirport: 'SGN',
        arrivalAirport: 'HAN',
        departureDate: '2025-08-15T06:00:00Z',
        arrivalDate: '2025-08-15T08:15:00Z',
        pricing: {
          economy: { price: 2500000, available: 50 }
        }
      },
      searchCriteria: testData.searchParams,
      selectedClass: 'economy'
    }

    // Lưu vào sessionStorage như thật
    sessionStorage.setItem('selectedFlight', JSON.stringify(mockSelectedFlight))
    
    // Mở trang booking
    window.open('/flights/booking', '_blank')
    setStep(3)
  }

  const testStep3_BookingForm = () => {
    // Giả lập việc điền form đặt vé
    const mockBookingData = {
      flight: {
        id: '1',
        flightNumber: 'VN123',
        airline: 'Vietnam Airlines',
        departureAirport: 'SGN',
        arrivalAirport: 'HAN',
        departureDate: '2025-08-15T06:00:00Z',
        arrivalDate: '2025-08-15T08:15:00Z',
        pricing: {
          economy: { price: 2500000, available: 50 }
        }
      },
      passengers: [{
        type: 'adult',
        title: 'Mr',
        firstName: 'Nguyen',
        lastName: 'Van A',
        dateOfBirth: '1990-01-01',
        nationality: 'VN'
      }],
      contactInfo: {
        name: 'Nguyen Van A',
        email: 'test@example.com',
        phone: '0901234567',
        address: 'TP HCM'
      },
      selectedClass: 'economy',
      totalPrice: 2500000
    }

    // Lưu vào sessionStorage
    sessionStorage.setItem('flightBookingData', JSON.stringify(mockBookingData))
    
    // Mở trang payment
    window.open('/flights/payment', '_blank')
    setStep(4)
  }

  const testStep4_Payment = () => {
    alert('✅ Hoàn thành test flow thanh toán!')
    setStep(1)
  }

  const testAPIDirectly = async () => {
    try {
      const response = await fetch('/api/flights/search?from=SGN&to=HAN&departureDate=2025-08-15&adults=1&children=0&infants=0&class=economy')
      const data = await response.json()
      console.log('API Response:', data)
      alert('✅ API hoạt động tốt! Check console để xem data')
    } catch (error) {
      console.error('API Error:', error)
      alert('❌ Lỗi API: ' + (error as Error).message)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          🧪 Test Flow: Vé máy bay → Tìm chuyến → Đặt vé → Thanh toán
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Current Flow Status:</h2>
          <div className="flex items-center space-x-4">
            <div className={`px-4 py-2 rounded ${step >= 1 ? 'bg-green-100 text-green-800' : 'bg-gray-100'}`}>
              1. Vé máy bay
            </div>
            <span>→</span>
            <div className={`px-4 py-2 rounded ${step >= 2 ? 'bg-green-100 text-green-800' : 'bg-gray-100'}`}>
              2. Tìm chuyến
            </div>
            <span>→</span>
            <div className={`px-4 py-2 rounded ${step >= 3 ? 'bg-green-100 text-green-800' : 'bg-gray-100'}`}>
              3. Đặt vé
            </div>
            <span>→</span>
            <div className={`px-4 py-2 rounded ${step >= 4 ? 'bg-green-100 text-green-800' : 'bg-gray-100'}`}>
              4. Thanh toán
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">🔍 Step 1: Test Search Flow</h3>
            <p className="text-gray-600 mb-4">Test trang tìm kiếm chuyến bay với params: SGN → HAN, 15/08/2025</p>
            <button
              onClick={testStep1_FlightSearch}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Test Tìm chuyến bay
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">✈️ Step 2: Test Booking Flow</h3>
            <p className="text-gray-600 mb-4">Giả lập việc chọn chuyến bay và chuyển đến trang đặt vé</p>
            <button
              onClick={testStep2_SelectFlight}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Test Chọn chuyến bay
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">📝 Step 3: Test Payment Flow</h3>
            <p className="text-gray-600 mb-4">Giả lập việc điền form và chuyển đến thanh toán</p>
            <button
              onClick={testStep3_BookingForm}
              className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700"
            >
              Test Đặt vé
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">💳 Step 4: Complete Flow</h3>
            <p className="text-gray-600 mb-4">Hoàn thành flow thanh toán</p>
            <button
              onClick={testStep4_Payment}
              className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
            >
              Test Thanh toán
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">🔧 Test API Directly</h3>
            <p className="text-gray-600 mb-4">Test API search trực tiếp</p>
            <button
              onClick={testAPIDirectly}
              className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700"
            >
              Test API Search
            </button>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-800 mb-2">📋 Hướng dẫn test:</h4>
          <ol className="list-decimal list-inside text-blue-700 space-y-1">
            <li>Click &quot;Test Tìm chuyến bay&quot; → sẽ mở tab mới với kết quả search</li>
            <li>Click &quot;Test Chọn chuyến bay&quot; → sẽ mở trang booking với data giả lập</li>
            <li>Click &quot;Test Đặt vé&quot; → sẽ mở trang payment với booking data</li>
            <li>Click &quot;Test API Search&quot; → kiểm tra API có hoạt động không</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
