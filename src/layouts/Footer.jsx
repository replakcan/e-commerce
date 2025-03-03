import FooterBottom from '@/components/FooterBottom'
import FooterMid from '@/components/FooterMid'

const Footer = () => {
  return (
    <div className="layout flex flex-col bg-gray-50 text-black">
      <FooterMid />
      <FooterBottom />
    </div>
  )
}

export default Footer
