import React from "react";
import '../../scss/Home/Footer.scss'
import Img1 from '../../assets/HomeFooter/bo-cong-thuong.svg'
import Img2 from '../../assets/HomeFooter/facebook-square.svg'
import Img3 from '../../assets/HomeFooter/youtube-square.svg'


const HomeFooter = () =>{

    return(
        <div className="Footer">
            <div className="Footer-Container">
            <div className="Footer-Container-conten">

                <div className="left">
                    <h4>Công ty Cổ phần Công nghệ BookingCare</h4>
                    <p>Địa Chỉ : 28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội</p>
                    <p>ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015</p>
                    <div>
                    <img src={Img1}/>
                    <img src={Img1}/>
                    </div>
                </div>
                <div className="mid">
                    <a className="mid-item" href="#">Liên hệ hợp tác</a><br/>
                    <a className="mid-item" href="#">Câu hỏi thường gặp</a><br/>
                    <a className="mid-item" href="#">Điều khoản sử dụng</a><br/>
                    <a className="mid-item" href="#">Chính sách Bảo mật</a><br/>
                    <a className="mid-item" href="#">Quy trình hỗ trợ giải quyết khiếu nại</a><br/>
                    <a className="mid-item" href="#">Quy chế hoạt động</a><br/>
                </div>
                <div className="right">
                    <div className="right-item">
                        <h4>Trụ sở tại Hà Nội</h4>
                        <p>28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội</p>
                    </div>
                    <div className="right-item">
                        <h4>Văn phòng tại TP Hồ Chí Minh</h4>
                        <p>6/6 Cách Mạch Tháng Tám, P. Bến Thành, Quận 1</p>
                        </div>
                    <div className="right-item">
                        <h4>Hỗ trợ khách hàng</h4>
                        <p>support@bookingcare.vn (7h - 18h)</p>
                    </div>
                </div>
            </div>
            <div className="Footer-container-botton"> 
            <span> Tải ứng dụng BookingCare cho điện thoại hoặc máy tính bảng</span><a style={{textDecoration:'none',marginLeft:'5px'}} href="#">AndroidiPhone/iPadKhác</a>
            </div>

            </div>
            <div className="Footer-end">
                <div className="Footer-end-container">

                    <div className="footer-title">© 2022 BookingCare.</div>
                    <div className="Footer-Icon">
                        <img src={Img2}/>
                        <img src={Img3}/>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default HomeFooter