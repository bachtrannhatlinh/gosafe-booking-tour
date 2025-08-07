import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Về chúng tôi - GoSafe',
  description: 'Tìm hiểu về GoSafe - nền tảng đặt tour du lịch an toàn và tin cậy hàng đầu Việt Nam.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Về GoSafe
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Nền tảng đặt tour du lịch an toàn và tin cậy hàng đầu Việt Nam
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Sứ mệnh</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Mang đến trải nghiệm du lịch an toàn, chất lượng và đáng nhớ cho mọi khách hàng. 
              Chúng tôi cam kết xây dựng một nền tảng đáng tin cậy, giúp kết nối du khách với 
              những dịch vụ du lịch tốt nhất, từ tour trọn gói đến các dịch vụ riêng lẻ như 
              vé máy bay, khách sạn, thuê xe và tài xế.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Tầm nhìn</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Trở thành nền tảng du lịch hàng đầu Việt Nam, được tin tưởng bởi hàng triệu 
              khách hàng. Chúng tôi hướng đến việc số hóa ngành du lịch, tạo ra một hệ sinh thái 
              hoàn chỉnh và hiện đại, nơi mọi nhu cầu du lịch đều được đáp ứng một cách 
              thuận tiện và an toàn nhất.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Giá trị cốt lõi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🛡️',
                title: 'An toàn',
                description: 'Đặt sự an toàn của khách hàng lên hàng đầu trong mọi hoạt động'
              },
              {
                icon: '🤝',
                title: 'Tin cậy',
                description: 'Xây dựng lòng tin thông qua dịch vụ chất lượng và minh bạch'
              },
              {
                icon: '💡',
                title: 'Sáng tạo',
                description: 'Không ngừng đổi mới để mang đến trải nghiệm tốt nhất'
              },
              {
                icon: '❤️',
                title: 'Tận tâm',
                description: 'Phục vụ với tất cả sự tận tâm và chuyên nghiệp'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">GoSafe trong con số</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '50,000+', label: 'Khách hàng hài lòng' },
              { number: '200+', label: 'Đối tác tin cậy' },
              { number: '5+', label: 'Năm kinh nghiệm' },
              { number: '99%', label: 'Tỷ lệ hài lòng' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Đội ngũ lãnh đạo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Nguyễn Văn An',
                position: 'CEO & Founder',
                bio: '10+ năm kinh nghiệm trong ngành du lịch và công nghệ',
                image: '👨‍💼'
              },
              {
                name: 'Trần Thị Bình',
                position: 'CTO',
                bio: 'Chuyên gia công nghệ với kinh nghiệm phát triển platform',
                image: '👩‍💻'
              },
              {
                name: 'Lê Văn Cường',
                position: 'Head of Operations',
                bio: 'Quản lý vận hành và quan hệ đối tác chiến lược',
                image: '👨‍💼'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Chứng nhận & Giải thưởng</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Giấy phép kinh doanh lữ hành',
                description: 'Được cấp bởi Tổng cục Du lịch Việt Nam'
              },
              {
                title: 'Chứng nhận ISO 9001:2015',
                description: 'Hệ thống quản lý chất lượng quốc tế'
              },
              {
                title: 'Top 10 Startup Du lịch 2023',
                description: 'Vinh danh bởi Vietnam Tourism Awards'
              },
              {
                title: 'Chứng nhận an toàn thông tin',
                description: 'Bảo mật dữ liệu khách hàng theo chuẩn quốc tế'
              },
              {
                title: 'Thành viên VITA',
                description: 'Hiệp hội Du lịch Việt Nam'
              },
              {
                title: 'Partner chính thức',
                description: 'Của các hãng hàng không và khách sạn lớn'
              }
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Bắt đầu hành trình cùng GoSafe</h2>
          <p className="text-xl opacity-90 mb-8">
            Khám phá thế giới với sự an toàn và tin cậy
          </p>
          <div className="space-x-4">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Liên hệ ngay
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Xem tour hot
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
