<template>
<div class="dashboard">
    <div class="rightbar">
        <!-- Start Breadcrumbbar -->
        <div class="breadcrumbbar">
            <div class="row align-items-center">
                <div class="col-md-8 col-lg-8">
                    <h4 class="page-title">{{$t('breadcrumb.service_agree')}}</h4>
                    <div class="breadcrumb-list">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="dashboard">{{$t('breadcrumb.home')}}</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.service_agree')}}</li>
                        </ol>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="widgetbar">
                        <button class="btn btn-primary-rgba" @click="onUpdateServiceAgreementMgt()"><i class="feather icon-plus mr-2"></i>{{$t('table.button.update')}}</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Breadcrumbbar -->

        <!-- Start Contentbar-->
        <div class="contentbar">
            <!-- Start row -->
            <div class="row">
                <!-- Start col -->
                <div class="col-lg-12">
                    <div class="card m-b-30">
                        <div class="card-body">
                            <el-tabs type="border-card">
                                <el-tab-pane>
                                    <span slot="label"><i class="el-icon-date"></i> {{$t('table.hotels.label_header.private_policy_service_agreenebt')}}</span>
                                    <div id="policy" aria-labelledby="ui-id-1" role="tabpanel" class="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="false">
                                        <p style="margin-left:0cm; margin-right:0cm; text-align:center"><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:#262626">CHÍNH SÁCH BẢO MẬT THÔNG TIN</span></span></span></strong></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm"><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:#262626">Go2Joy hiểu rằng Quý khách hàng rất quan tâm đến việc những thông tin cá nhân mà bạn đã tin cậy cung cấp cho chúng tôi được bảo mật và sử dụng ra sao. Go2Joy rất trân trọng sự tin tưởng đó và cam kết rằng những thông tin này sẽ được chúng tôi nỗ lực tối đa để bảo mật. Go2Joy đảm bảo sẽ sử dụng thông tin khách hàng một cách hợp lý, có cân nhắc để không ngừng cải thiện chất lượng dịch vụ và đem lại cho người sử dụng những trải nghiệm thú vị khi sử dụng dịch vụ của chúng tôi.</span></span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm"><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:#262626">1. </span></span></span></strong><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">Mục đích và phạm vi </span></span></span></strong><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:#262626">thu thập thông tin cá nhân</span></span></span></strong></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm; text-align:justify"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">Go2Joy <span style="background-color:white">không bán, chia sẻ hay trao đổi thông tin cá nhân của khách hàng thu thập trên ứng dụng cho một bên thứ ba nào khác. </span></span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm; text-align:justify"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="background-color:white"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">Phạm vi thu thập thông tin : </span></span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm; text-align:justify"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">+ Tên đăng ký</span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm; text-align:justify"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">+ Số điện thoại</span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm; text-align:justify"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">+ Email</span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm; text-align:justify"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">+ Mật khẩu</span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm; text-align:justify"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="background-color:white"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">Khách hàng có thể chọn không cung cấp cho chúng tôi một số thông tin nhất định nhưng khi đó khách hàng sẽ có thể không hưởng được một số tiện ích mà những tính năng của Go2Joy cung cấp.</span></span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm; text-align:justify"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="background-color:white"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">Các thông tin giao dịch được thu thập ngay cả khi khách hàng không đặt phòng bao gồm nhưng không giới hạn: lịch sử tìm kiếm và chi tiết đặt phòng; vị trí thiết bị, cài đặt thiết bị; giá trị và thời gian thanh toán; sẽ được lưu trữ nhằm giải quyết những vấn đề có thể phát sinh về sau khi có yêu cầu từ khách hàng.</span></span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm; text-align:justify"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">Những thông tin trên sẽ được sử dụng cho mục đích sau đây: </span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm; text-align:justify"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">+</span></span></span><span style="font-size:10.0pt"><span style="background-color:white"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black"> Tạo tài khoản thành viên và xác định phần thanh toán của khách hàng.</span></span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm; text-align:justify"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="font-size:10.0pt"><span style="background-color:white"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">+ Thông báo về việc đặt phòng đã thành công và hỗ trợ khách hàng.</span></span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm; text-align:justify"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="font-size:10.0pt"><span style="background-color:white"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">+ Cung cấp thông tin về dịch vụ.</span></span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm; text-align:justify"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="font-size:10.0pt"><span style="background-color:white"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">+ Ngoài ra, chúng tôi sẽ sử dụng thông tin khách hàng cung cấp để hỗ trợ quản lý tài khoản khách hàng; xác nhận và thực hiện các giao dịch tài chính liên quan đến các khoản thanh toán (nếu có) của khách hàng.</span></span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm; text-align:justify"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="font-size:10.0pt"><span style="background-color:white"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">+ Chi tiết đặt phòng của khách hàng sẽ được chúng tôi lưu trữ nhưng vì lý do bảo mật, khách hàng không thể yêu cầu thông tin đó từ chúng tôi. Tuy nhiên, khách hàng có thể kiểm tra thông tin đó bằng cách đăng nhập vào tài khoản riêng của mình trên ứng dụng Go2Joy. Tại đó, khách hàng có thể theo dõi đầy đủ chi tiết đặt phòng của mình cũng như quản lý thông tin về địa chỉ, thông tin về ngân hàng và những bản tin mà khách hàng đã đăng ký nhận. </span></span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm"><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="background-color:white"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">Go2Joy không buộc người dùng phải sử dụng các dịch vụ đính kèm khi cài đặt và sử dụng ứng dụng.</span></span></span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm"><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><strong><span style="font-size:10.0pt"><span style="background-color:white"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">2. Phạm vi sử dụng thông tin:</span></span></span></span></strong></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm"><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="background-color:white"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">Thông tin cá nhân thu thập được sẽ chỉ được sử dụng trong giới hạn những hoạt động liên quan đến ứng dụng Go2Joy được phát triển bởi công ty Cổ phần Appro Mobile.</span></span></span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm"><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><strong><span style="font-size:10.0pt"><span style="background-color:white"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">3. Thời gian lưu trữ thông tin:</span></span></span></span></strong></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm; text-align:justify"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">Go2Joy <span style="background-color:white">sẽ lưu trữ các thông tin cá nhân do khách hàng cung cấp trên các hệ thống nội bộ trong quá trình cung cấp dịch vụ cho khách hàng hoặc cho đến khi hoàn thành mục đích thu thập hoặc khi khách hàng có yêu cầu hủy các thông tin đã cung cấp.</span></span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm"><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="background-color:white"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">Dữ liệu cá nhân của thành viên sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ hoặc tự thành viên đăng nhập và thực hiện hủy bỏ. Còn lại trong mọi trường hợp thông tin cá nhân thành viên sẽ được bảo mật trên máy chủ của Công ty.</span></span></span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm"><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:#262626">4. </span></span></span></strong><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">Địa chỉ </span></span></span></strong><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:#262626">thu thập và quản lý thông tin cá nhân</span></span></span></strong></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm"><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:#262626">CÔNG TY CỔ PHẦN APPRO MOBILE</span></span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm"><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:#262626">Địa chỉ: Số 5A/2 Trần Phú, Phường 04, Quận 05, TP.HCM.</span></span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm"><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:#262626">Email:&nbsp;</span></span></span><a href="mailto:support@go2joy.vn"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:#337ab7">support@go2joy.vn</span></span></span></a><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:#262626">.</span></span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm"><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">Điện thoại: 0931 836 836</span></span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm"><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:#262626">5. Phương tiện và công cụ để thành viên tiếp cận và chỉnh sửa dữ liệu cá nhân của mình</span></span></span></strong></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm"><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="background-color:white"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">Khách hàng có thể cập nhật thông tin cá nhân của mình bất kỳ lúc nào bằng cách đăng nhập vào ứng dụng&nbsp;Go2Joy trên thiết bị di động.</span></span></span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm"><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:#262626">6. </span></span></span></strong><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">Cam kết </span></span></span></strong><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:#262626">bảo mật thông tin khách hàng</span></span></span></strong></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm"><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:#262626">Điều quan trọng đối với khách hàng là việc tự bảo vệ mình trước sự tiếp cận thông tin về mật khẩu khi bạn dùng chung máy tính với nhiều người. Khi đó, bạn phải chắc chắn đã thoát khỏi tài khoản sau khi sử dụng dịch vụ của chúng tôi.</span></span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm; text-align:justify"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="font-size:10.0pt"><span style="background-color:white"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">Go2Joy cam kết không bán, trao đổi hay chia sẻ thông tin dẫn đến việc làm lộ thông tin cá nhân của khách hàng vì mục đích thương mại, vi phạm những cam kết được đặt ra trong Quy định chính sách bảo mật thông tin khách hàng.</span></span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm; text-align:justify"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="font-size:10.0pt"><span style="background-color:white"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">Go2Joy sẽ không chia sẻ thông tin khách hàng trừ những trường hợp cụ thể như sau:</span></span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm; text-align:justify"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="font-size:10.0pt"><span style="background-color:white"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">+ Theo yêu cầu pháp lý từ một cơ quan chính phủ hoặc khi chúng tôi tin rằng việc làm đó là cần thiết và phù hợp nhằm tuân theo các yêu cầu pháp lý.</span></span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm; text-align:justify"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="font-size:10.0pt"><span style="background-color:white"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">+ &nbsp;Để bảo vệ&nbsp;<strong>Go2Joy </strong>và các bên thứ ba khác: Chúng tôi chỉ đưa ra thông tin tài khoản và những thông tin cá nhân khác khi tin chắc rằng việc đưa những thông tin đó là phù hợp với luật pháp, bảo vệ quyền lợi, tài sản của người sử dụng dịch vụ, của&nbsp;<strong>Go2Joy </strong>và các bên thứ ba khác.</span></span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm; text-align:justify"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">+ Trong những trường hợp còn lại, chúng tôi sẽ có thông báo cụ thể cho khách hàng khi phải tiết lộ thông tin cho một bên thứ ba và thông tin này chỉ được cung cấp khi được sự phản hồi đồng ý từ phía khách hàng.</span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm; text-align:justify"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">Trường hợp khách hàng gửi khiếu nại có liên quan đến việc bảo mật thông tin khách hàng. Ngay khi tiếp nhận thông tin,</span></span></span>&nbsp;<strong><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">Go2Joy </span></span></span></strong><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">sẽ nhanh chóng thực hiện việc kiểm tra, xác minh. Trong trường hợp đúng như phản ánh của khách hàng thì</span></span></span>&nbsp;<strong><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">Go2Joy </span></span></span></strong><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">sẽ liên hệ trực tiếp với khách hàng để xử lý vụ việc trên tin thần khắc phục và thiện chí. Trường hợp hai bên không thể tự thoả thuận thì sẽ đưa ra Tòa án Nhân Dân có thẩm quyền tại Thành Phố Hồ Chí Minh để giải quyết.</span></span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm; text-align:justify"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">Chính sách bảo mật thông tin khách hàng của</span></span></span>&nbsp;<strong><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">Go2Joy</span></span></span></strong><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black"> chỉ được áp dụng tại địa chỉ ứng dụng </span></span></span><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">Go2Joy</span></span></span></strong><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">. Nó không bao gồm hoặc liên quan đến các bên thứ ba khác đặt quảng cáo hoặc có liên kết tại</span></span></span>&nbsp;<strong><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:black">Go2Joy.</span></span></span></strong></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm; text-align:justify"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><strong><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:#262626">Lưu &lrm; ý:</span></span></span></strong></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm"><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,&quot;sans-serif&quot;"><span style="color:#262626">Chính sách bảo mật thông tin khách hàng của Go2Joy chỉ được áp dụng tại ứng dụng Go2Joy. &nbsp;không bao gồm hoặc liên quan đến các bên thứ ba khác. Ban quản lý ứng dụng Go2Joy không chịu trách nhiệm cũng như không giải quyết mọi khiếu nại có liên quan đến quyền lợi của thành viên đó nếu xét thấy tất cả thông tin cá nhân của thành viên đó cung cấp khi đăng ký ban đầu là không chính xác.</span></span></span></span></span></span></p>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane :label="$t('table.hotels.label_header.service_agreement_service_agreenebt')">
                                    <div id="sa" aria-labelledby="ui-id-2" role="tabpanel" class="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="false" style="display: block;">
                                        <p style="text-align:center"><strong>ĐIỀU KHOẢN SỬ DỤNG VÀ QUY CHẾ HOẠT ĐỘNG</strong></p>

                                        <p>BẠN PHẢI ĐỌC NHỮNG ĐIỀU KHOẢN SỬ DỤNG DƯỚI ĐÂY TRƯỚC KHI SỬ DỤNG ỨNG DỤNG NÀY. VIỆC SỬ DỤNG ỨNG DỤNG NÀY XÁC NHẬN VIỆC CHẤP THUẬN VÀ TUÂN THỦ CÁC ĐIỀU KHOẢN VÀ ĐIỀU KIỆN DƯỚI ĐÂY.</p>

                                        <p>Ứng dụng Go2Joy được xây dựng và phát triển nhằm phục vụ nhu cầu tìm kiếm và đặt phòng khách sạn một cách nhanh chóng, hỗ trợ tối đa cho khách hàng trong việc tìm kiếm khách sạn phù hợp với địa điểm hiện tại, mức giá hợp lý, thanh toán dễ dàng.</p>

                                        <p>Sứ mệnh của Ứng dụng Go2Joy là trở thành Ứng dụng thương mại tin cậy, hữu ích trong lĩnh vực ứng dụng công nghệ thông tin vào đời sống công nghệ hiện nay.</p>

                                        <p>Thương nhân, tổ chức, cá nhân tham gia giao dịch tại Ứng dụng Go2Joy tự do thỏa thuận trên cơ sở tôn trọng quyền và lợi ích hợp pháp của các bên tham gia hoạt động sử dụng dịch vụ thông qua hợp đồng và không trái với quy định của pháp luật hiện hành của Việt Nam.</p>

                                        <p>Thông tin về thương nhân, tổ chức, cá nhân tham gia là thành viên trên Go2Joy phải minh bạch và chính xác.</p>

                                        <p>Sản phẩm, dịch vụ tham gia giao dịch trên Ứng dụng phải đáp ứng đầy đủ các quy định của pháp luật có liên quan, không thuộc các trường hợp cấm kinh doanh, cấm quảng cáo theo quy định của pháp luật.</p>

                                        <p>Ứng dụng Go2Joy có quyền truy cập vào:</p>

                                        <ul>
                                            <li>
                                                <p>Nhận dạng: Sử dụng một hoặc nhiều tài khoản trên thiết bị, dữ liệu tiểu sử.</p>
                                            </li>
                                            <li>
                                                <p>Vị trí: Sử dụng vị trí của thiết bị mà bạn đang dùng để định vị và xác định vị trí hiện tại.</p>
                                            </li>
                                            <li>
                                                <p>Thông tin về kết nối wifi: Cho phép ứng dụng xem thông tin về mạng wifi, chẳng hạn như wifi có được bật hay không và tên của các thiết bị wifi được kết nối.</p>
                                            </li>
                                            <li>
                                                <p>ID thiết bị và thông tin cuộc gọi: Cho phép ứng dụng xác định số điện thoại và ID thiết bị.</p>
                                            </li>
                                        </ul>

                                        <p>Có thể xảy ra những thay đổi về điều kiện hoặc hoàn cảnh thị trường mà có thể dẫn đến những thay đổi trong một thời gian ngắn khiến thông tin được cung cấp không chính xác hoặc không hiện hành. Trong trường hợp có bất kỳ vấn đề gì, bạn có thể liên hệ với bộ phận dịch vụ khách hàng để hỗ trợ và giải đáp thắc mắc cho bạn.</p>

                                        <p>Các nhà cung cấp dịch vụ có thể được giới thiệu ở hình thức phân loại thứ hạng khác nhau dựa trên các yếu tố bao gồm nhưng không giới hạn các đánh giá, xếp hạng từ người dùng hoặc các yếu tố khác của nhà cung cấp dịch vụ. Sự xếp hạng đưa ra có tính chính xác tương đối cao dựa trên các thuật toán tự động có thể được cập nhật và thay đổi tùy từng thời điểm, theo quyết định của riêng của chúng tôi.</p>

                                        <p>Thành viên tham gia giao dịch trên Ứng dụng Go2Joy là thương nhân, cá nhân có nhu cầu cung ứng và sử dụng dịch vụ mà Ứng dụng Go2Joy mang lại, bao gồm người cung ứng dịch vụ và người sử dụng dịch vụ.</p>

                                        <p>Khi đăng ký là thành viên của Ứng dụng Go2Joy, thành viên hiểu rằng:</p>

                                        <ul>
                                            <li>
                                                <p>Thành viên có thể tạo một tài khoản cá nhân của mình để sử dụng dịch vụ.</p>
                                            </li>
                                            <li>
                                                <p>Thành viên có thể cung ứng hoặc sử dụng dịch vụ theo đúng giá và quy chuẩn cam kết hợp pháp đã công bố trên Ứng dụng.</p>
                                            </li>
                                            <li>
                                                <p>Thành viên phải bảo vệ mật khẩu của mình và giám sát việc sử dụng các tài khoản của mình, hiểu và đồng ý rằng thành viên chịu trách nhiệm mọi thông tin cá nhân có liên quan kể cả việc sử dụng tài khoản của mình, chịu hoàn toàn trách nhiệm đối với bất cứ ai được thành viên cho phép truy cập vào nó.</p>
                                            </li>
                                        </ul>

                                        <p>Nội dung bản Quy chế này tuân thủ theo các quy định hiện hành của Việt Nam. Thành viên khi tham gia vào Ứng dụng Go2Joy phải cam kết thực hiện đúng những nội dung trong Quy chế của Ứng dụng .</p>

                                        <p><strong>1. Nguyên tắc chung</strong></p>

                                        <p>1.1. Đảm bảo an toàn giao dịch</p>

                                        <p>Để đảm bảo các giao dịch được tiến hành thành công, hạn chế tối đa rủi ro có thể phát sinh, yêu cầu các thành viên tham gia lưu ý và tuân thủ các nội dung cam kết như sau:</p>

                                        <ul>
                                            <li>
                                                <p>Thành viên không nên đưa thông tin chi tiết về việc thanh toán với bất kỳ ai bằng thư điện tử, chúng tôi không chịu trách nhiệm về những mất mát thành viên có thể gánh chịu trong việc trao đổi thông tin của thành viên qua internet hoặc thư điện tử.</p>
                                            </li>
                                            <li>
                                                <p>Thành viên tuyệt đối không sử dụng bất kỳ chương trình, công cụ hay hình thức nào khác để can thiệp vào hệ thống hay làm thay đổi cấu trúc dữ liệu. Mọi vi phạm sẽ bị xử lý theo Quy chế và quy định của pháp luật.</p>
                                            </li>
                                            <li>
                                                <p>Mọi thông tin giao dịch được bảo mật, trừ trường hợp buộc phải cung cấp khi cơ quan pháp luật yêu cầu.</p>
                                            </li>
                                        </ul>

                                        <p>1.2. Bảo vệ quyền lợi người tiêu dùng</p>

                                        <ul>
                                            <li>
                                                <p>Ban quản lý Ứng dụng Go2Joy yêu cầu các cá nhân khi đăng ký là thành viên phải cung cấp thông tin cá nhân có liên quan bao gồm nhưng không giới hạn: họ tên, địa chỉ liên lạc, địa chỉ thư điện tử, số chứng minh nhân dân, điện thoại, số tài khoản, số thẻ thanh toán... và chịu trách nhiệm về tính pháp lý và chính xác của những thông tin trên. Ban quản lý Go2Joy không chịu trách nhiệm cũng như không giải quyết mọi khiếu nại có liên quan đến quyền lợi của thành viên đó nếu xét thấy tất cả thông tin cá nhân của thành viên đó cung cấp khi đăng ký ban đầu là không chính xác.</p>
                                            </li>
                                            <li>
                                                <p>Thành viên nên xem xét kỹ các thông tin liên quan đến các sản phẩm dịch vụ đang khuyến mãi về điều kiện sử dụng, địa chỉ, phương thức thanh toán và các thông tin có liên quan trước khi sử dụng dịch vụ…</p>
                                            </li>
                                            <li>
                                                <p>Thành viên có thể gửi thông tin khiếu nại thông qua kênh chăm sóc khách hàng của Go2Joy. Bộ phận chăm sóc khách hàng của Go2Joy sẽ hỗ trợ thành viên gửi thông tin khiếu nại có liên quan đến thương nhân thực hiện khuyến mại bằng các phương thức nhanh nhất.</p>
                                            </li>
                                            <li>
                                                <p>Bên dưới mỗi khách sạn mà thành viên tham gia có phần “Bình luận”, thành viên (người sử dụng dịch vụ) có thể phản ánh ý kiến hoặc nhận xét của mình liên quan đến dịch vụ, chất lượng phòng… Go2Joy có quyền không đăng tải các nhận xét được xem là không phù hợp dựa trên sự cân nhắc đối với các nguyên tắc cộng đồng nói chung và nguyên tắc của chúng tôi.</p>
                                            </li>
                                            <li>
                                                <p>Quy định hủy phòng: Trừ trường hợp đặc biệt được nêu cụ thể trong xác nhận đặt phòng, đối với giao dịch đặt phòng thông thường, yêu cầu hủy phòng được chấp nhận trễ nhất là một (1) giờ trước thời gian bắt đầu ở khách sạn đã được đặt.</p>
                                            </li>
                                        </ul>

                                        <p>1.3. Quản lý thông tin xấu</p>

                                        <ul>
                                            <li>
                                                <p>Thành viên sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt động sử dụng dịch vụ dưới tên đăng ký, mật khẩu của mình. Thành viên có trách nhiệm thông báo kịp thời cho Ban quản lý Ứng dụng Go2Joy về những hành vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của bên thứ ba để có biện pháp giải quyết phù hợp.</p>
                                            </li>
                                            <li>
                                                <p>Thành viên không được hành động gây mất uy tín cho các sản phẩm dịch vụ khác dưới mọi hình thức như gây mất đoàn kết giữa các thành viên bằng cách sử dụng tên đăng ký thứ hai, thông qua một bên thứ ba hoặc tuyên truyền, phổ biến những thông tin không có lợi cho uy tín của Ứng dụng Go2Joy.</p>
                                            </li>
                                        </ul>

                                        <p>1.4. Giới hạn trách nhiệm trong trường hợp phát sinh lỗi kỹ thuật:</p>

                                        <p>Khi thực hiện các giao dịch trên Ứng dụng Go2Joy, bắt buộc các thành viên phải thực hiện đúng theo các quy trình hướng dẫn. Ban quản lý cam kết cung cấp chất lượng dịch vụ tốt nhất cho các thành viên tham gia giao dịch.</p>

                                        <p>Trường hợp phát sinh lỗi kỹ thuật, lỗi phần mềm hoặc các lỗi khách quan khác dẫn đến thành viên không thể tham gia giao dịch được thì các thành viên thông báo cho Ban quản lý Ứng dụng Go2Joy biết qua địa chỉ thư điện tử&nbsp;<a href="mailto:support@go2joy.vn">support@go2joy.vn</a>. Chúng tôi sẽ khắc phục lỗi trong thời gian sớm nhất, tạo điều kiện cho các thành viên tham gia. Tuy nhiên, Ban quản lý sẽ không chịu trách nhiệm giải quyết trong trường hợp thông báo của các thành viên không đến được Ban quản lý, phát sinh từ lỗi kỹ thuật, lỗi đường truyền, phần mềm hoặc các lỗi khác không do Ban quản lý gây ra.</p>

                                        <p><strong>2. Quy trình</strong></p>

                                        <p>2.1. Quy trình giao dịch</p>

                                        <p>a. Đối với đối tác của Go2Joy</p>

                                        <p>Đối tác của Go2Joy là các khách sạn, nhà nghỉ cung cấp dịch vụ cho thuê phòng thông qua Ứng dụng đặt phòng online Go2Joy.</p>

                                        <p>Quy trình tham gia cung ứng dịch vụ như sau:[T1]</p>

                                        <ul>
                                            <li>
                                                <p>Gửi thông tin liên hệ (tên người liên hệ, điện thoại liên hệ, tên khách sạn, địa chỉ khách sạn) đến support@go2joy.vn hoặc gọi điện thoại đến số 0931836836 để được hướng dẫn thủ tục hợp tác.</p>
                                            </li>
                                            <li>
                                                <p>Thỏa thuận các điều khoản và ký kết hợp đồng.</p>
                                            </li>
                                            <li>
                                                <p>Ban Quản trị Ứng dụng Go2Joy tạo tài khoản để khách sạn cập nhật thông tin đăng tải trên Ứng dụng.</p>
                                            </li>
                                            <li>
                                                <p>Ứng dụng Go2Joy cập nhật các giao dịch đặt phòng và chuyển cho khách sạn.</p>
                                            </li>
                                            <li>
                                                <p>Khách sạn cung ứng dịch vụ cho người dùng theo đúng cam kết và tiến hành đối soát, thanh toán các giao dịch thành công với Ứng dụng Go2Joy.</p>
                                            </li>
                                        </ul>

                                        <p>b. Đối với người dùng Ứng dụng Go2Joy</p>

                                        <p>Người dùng Ứng dụng Go2Joy là người sử dụng dịch vụ đặt phòng khách sạn trên Ứng dụng Go2Joy.</p>

                                        <ul>
                                            <li>
                                                <p>Đăng ký tài khoản thành viên.</p>
                                            </li>
                                            <li>
                                                <p>Tham khảo, tìm kiếm địa điểm theo nhu cầu.</p>
                                            </li>
                                            <li>
                                                <p>Lựa chọn địa điểm, loại phòng phù hợp.</p>
                                            </li>
                                            <li>
                                                <p>Thực hiện đặt phòng.</p>
                                            </li>
                                            <li>
                                                <p>Lựa chọn hình thức thanh toán: trả ngay (thanh toán trực tuyến) hoặc trả sau tại khách sạn.</p>
                                            </li>
                                            <li>
                                                <p>Xác nhận giao dịch đặt phòng (đối với hình thức trả sau) và giữ phòng (đối với hình thức trả ngay).</p>
                                            </li>
                                        </ul>

                                        <p>2.2. Quy trình hỗ trợ giải quyết khiếu nại và phản ánh</p>

                                        <p>Quy định khiếu nại, cảnh báo, tranh chấp:</p>

                                        <ul>
                                            <li>
                                                <p>Tất cả thông tin mà thành viên cung cấp phải chính xác và đúng sự thật.</p>
                                            </li>
                                            <li>
                                                <p>Có bằng chứng cụ thể, rõ ràng.</p>
                                            </li>
                                        </ul>

                                        <p>Công ty tích cực kết nối các bên để đàm phán, thỏa thuận các mâu thuẫn phát sinh trong quá trình giao dịch.</p>

                                        <p>Các bên liên quan bao gồm người cung cấp dịch vụ và người sử dụng dịch vụ sẽ phải có vai trò trách nhiệm trong việc tích cực giải quyết vấn đề. Đối với người cung cấp dịch vụ cần có trách nhiệm cung cấp văn bản giấy tờ chứng thực thông tin liên quan đến sự việc đang gây mâu thuẫn cho người sử dụng dịch vụ . Đối với Công ty sẽ có trách cung cấp những thông tin liên quan đến người cung cấp dịch vụ và người sử dụng dịch vụ nếu được bên liên quan đến tranh chấp đó yêu cầu.</p>

                                        <p>Ứng dụng Go2Joy và người cung cấp dịch vụ có trách nhiệm tiếp nhận khiếu nại và hỗ trợ người dùng liên quan đến giao dịch tại Ứng dụng Go2Joy.</p>

                                        <p>Khi phát sinh tranh chấp, Công ty đề cao giải pháp thương lượng, hòa giải giữa các bên nhằm duy trì sự tin cậy của thành viên vào chất lượng dịch vụ của Ứng dụng Go2Joy và thực hiện theo các bước của Quy trình thực hiện khiếu nại.</p>

                                        <p>2.3. Quy trình thực hiện khiếu nại</p>

                                        <ul>
                                            <li>
                                                <p>Bước 1: Thành viên người sử dụng dịch vụ khiếu nại về dịch vụ của người cung cấp qua địa chỉ thư điện tử&nbsp;<a href="mailto:admin@appromobile.com">support@go2joy.vn</a>.</p>
                                            </li>
                                            <li>
                                                <p>Bước 2: Ban quản lý Ứng dụng Go2Joy sẽ tiếp nhận các khiếu nại của thành viên, người sử dụng dịch vụ và tùy theo tính chất và mức độ của khiếu nại thì Ban quản lý Ứng dụng Go2Joy sẽ có những biện pháp cụ thể hỗ trợ người dùng để giải quyết tranh chấp đó.</p>
                                            </li>
                                            <li>
                                                <p>Bước 3: Trong trường nằm ngoài khả năng và thẩm quyền của Ứng dụng thì Ban quản lý sẽ yêu cầu người sử dụng dịch vụ đưa vụ việc này ra cơ quan nhà nước có thẩm quyền giải quyết theo quy định pháp luật.</p>
                                            </li>
                                        </ul>

                                        <p><strong>3. Quyền và trách nhiệm của Ban quản lý Ứng dụng Go2Joy</strong></p>

                                        <ul>
                                            <li>
                                                <p>Tổ chức thực hiện quảng cáo các chương trình khuyến mại, giới thiệu, cung cấp các sản phẩm, dịch vụ của đối tác với mức giá ưu đãi đến các thành viên đăng ký tham gia sau khi đã hoàn thành các thủ tục đăng ký kê khai trực tuyến các thông tin cá nhân có liên quan và các điều kiện bắt buộc.</p>
                                            </li>
                                            <li>
                                                <p>Trong trường hợp có cơ sở để chứng minh thành viên cung cấp thông tin cho Ban quản lý Ứng dụng Go2Joy không chính xác, sai lệch, không đầy đủ hoặc vi phạm pháp luật hay thuần phong mỹ tục Việt Nam thì Ban quản lý có quyền từ chối, tạm ngừng hoặc chấm dứt quyền sử dụng dịch vụ của thành viên.</p>
                                            </li>
                                            <li>
                                                <p>Ban quản lý có thể chấm dứt quyền thành viên và quyền sử dụng một hoặc tất cả các dịch vụ của thành viên và sẽ thông báo cho thành viên trong thời hạn ít nhất là một (01) tháng trong trường hợp thành viên vi phạm các Quy chế của Ứng dụng Go2Joy hoặc có những hành vi ảnh hưởng đến hoạt động kinh doanh của những thành viên khác.</p>
                                            </li>
                                            <li>
                                                <p>Ban quản lý Ứng dụng Go2Joy có thể chấm dứt ngay quyền sử dụng dịch vụ và quyền thành viên của thành viên đó nếu phát hiện thành viên đã phá sản, bị kết án hoặc đang trong thời gian thụ án, trong trường hợp thành viên tiếp tục hoạt động có thể gây trách nhiệm pháp lý, có những hoạt động lừa đảo, giả mạo, gây rối loạn thị trường, gây mất đoàn kết đối với các thành viên khác của Ứng dụng Go2Joy, hoạt động vi phạm pháp luật hiện hành của Việt Nam. Trong trường hợp chấm dứt quyền thành viên và quyền sử dụng dịch vụ thì tất cả các chứng nhận, các quyền của thành viên được cấp sẽ mặc nhiên hết giá trị và bị chấm dứt.</p>
                                            </li>
                                            <li>
                                                <p>Ban quản lý Ứng dụng Go2Joy có quyền thu hộ phí dịch vụ cho đối tác của mình theo như thỏa thuận trong hợp đồng.</p>
                                            </li>
                                            <li>
                                                <p>Ban quản lý Ứng dụng Go2Joy có trách nhiệm tiếp nhận và giải quyết những phản ánh từ phía khách hàng.</p>
                                            </li>
                                        </ul>

                                        <p><strong>4. Quyền và trách nhiệm của thành viên</strong></p>

                                        <p>4.1. Quyền của thành viên</p>

                                        <ol>
                                        </ol>

                                        <ul>
                                            <li>
                                                <p>Thành viên là người sử dụng sẽ được cấp một tên đăng ký và mật khẩu riêng để sử dụng các dịch vụ, quản lý thông tin tài khoản và các giao dịch của mình trên Ứng dụng Go2Joy.</p>
                                            </li>
                                            <li>
                                                <p>Thành viên là đối tác sẽ được nhân viên của Go2Joy hỗ trợ để sử dụng được các công cụ, các tính năng phục vụ cho việc trở thành đối tác.</p>
                                            </li>
                                            <li>
                                                <p>Thành viên sẽ được hưởng các chính sách ưu đãi do Go2Joy mang lại hay các đối tác thứ ba cung cấp trên ứng dụng. Các chính sách ưu đãi này sẽ được đăng tải trực tiếp trên Ứng dụng Go2Joy hoặc được gửi trực tiếp đến các thành viên.</p>
                                            </li>
                                            <li>
                                                <p>Thành viên có quyền đóng góp ý kiến cho Ứng dụng Go2Joy trong quá trình hoạt động. Các kiến nghị được gửi trực tiếp bằng thư, fax hoặc email đến cho Ban Quản lý Ứng dụng Go2Joy theo địa chỉ liên lạc được công bố.</p>
                                            </li>
                                        </ul>

                                        <p>4.2. Trách nhiệm của thành viên</p>

                                        <ul>
                                            <li>
                                                <p>Thành viên sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt động sử dụng dịch vụ dưới tên đăng ký, mật khẩu của mình.</p>
                                            </li>
                                            <li>
                                                <p>Thành viên cam kết những thông tin cung cấp cho Ứng dụng và những thông tin đang tải trên ứng dụng là chính xác và hoàn chỉnh (đặc biệt thông tin có liên quan đến cá nhân của thành viên).</p>
                                            </li>
                                            <li>
                                                <p>Thành viên cam kết, đồng ý không sử dụng dịch vụ của Ứng dụng Go2Joy vào những mục đích không hợp pháp, không hợp lý, lừa đảo, đe dọa, thăm dò thông tin bất hợp pháp, phá hoại, tạo ra và phát tán virus gây hư hại tới hệ thống, cấu hình, truyền tải thông tin.</p>
                                            </li>
                                            <li>
                                                <p>Thành viên cam kết không được thay đổi, chỉnh sửa, gán ghép, sao chép, truyền bá, phân phối, cung cấp và tạo những công cụ tương tự của dịch vụ do Go2Joy cung cấp cho một bên thứ ba nếu không được sự đồng ý của Ban quản lý Ứng dụng Go2Joy.</p>
                                            </li>
                                            <li>
                                                <p>Thành viên không được hành động gây mất uy tín của Ứng dụng Go2Joy cũng như của các thành viên khác dưới mọi hình thức.</p>
                                            </li>
                                        </ul>

                                        <p><strong>5. Điều khoản áp dụng</strong></p>

                                        <p>Ban quản lý Ứng dụng Go2Joy có quyền và có thể thay đổi Quy chế này bằng cách thông báo tại Ứng dụng Go2Joy để các thành viên biết. Quy chế sửa đổi có hiệu lực kể từ ngày Quyết định về việc sửa đổi Quy chế có hiệu lực. Việc thành viên tiếp tục sử dụng dịch vụ sau khi Quy chế sửa đổi được công bố và thực thi đồng nghĩa với việc họ đã chấp nhận Quy chế sửa đổi này.</p>

                                        <p>Nếu bất kỳ nội dung nào của các Điều khoản và Quy chế này bị bất kỳ cơ quan có thẩm quyền xem là vô hiệu hoặc không thể thực hiện toàn bộ hoặc một phần, thì tính hiệu lực của các nội dung khác trong Điều khoản và Quy chế này sẽ không bị ảnh hưởng.</p>

                                        <p>Điều khoản và Quy chế này và mọi vấn đề phát sinh trong quan hệ hợp đồng giữa Go2Joy và khách hàng sẽ được hiểu và điều chỉnh theo quy định của luật pháp Việt Nam. Mọi tranh chấp, khác biệt, khiếu nại phát sinh từ hoặc liên quan đến nội dung của Điều khoản và Quy chế này sẽ được giải quyết thông qua thương lượng trên tinh thần thiện chí. Nếu không thể giải quyết, tranh chấp, khiếu nại trên có thể được giải quyết tại cơ quan tòa án có thẩm quyền.</p>

                                        <p dir="ltr" style="text-align:center"><strong>ĐIỂU KHOẢN SỬ DỤNG CHƯƠNG TRÌNH “ĐIỂM TÍCH LUỸ"</strong></p>

                                        <p dir="ltr">Bạn phải đọc những điều khoản sử dụng dưới đây trước khi tham gia chương trình điểm tích luỹ này. việc tham gia chương trình &nbsp;này xác nhận việc chấp thuận và tuân thủ các điều khoản và điều kiện dưới đây.</p>

                                        <p dir="ltr"><strong>I. Điều khoản chung:</strong></p>

                                        <p dir="ltr">1.1. Chương trình “Điểm Tich Luỹ" áp dụng với toàn bộ các khách sạn liên kết trong hệ thống Go2Joy.</p>

                                        <p dir="ltr">1.2. Mức tích điểm Điểm dành cho thành viên tuỳ theo chính sách cho từng thời điểm của Go2Joy. Số điểm tích căn cứ vào giá trị đơn phòng, không bao gồm phụ phí, chi phí khác. Chính sách Điểm tích lũy được thông báo trong mục My Point/ Điểm của tôi trên app Go2Joy.</p>

                                        <p dir="ltr">1.3. Điểm Tích Lũy &nbsp;không thể quy đổi thành tiền mặt hoặc chuyển khoản.</p>

                                        <p dir="ltr">1.4. Điểm Tích Luỹ chỉ được áp dụng cho mọi hình thức đặt phòng qua ứng dụng Go2Joy.</p>

                                        <p dir="ltr">1.5. Ưu đãi không được áp dụng đồng thời với các chương trình khác, trừ khi có quy định riêng</p>

                                        <p dir="ltr">1.6. Chỉ được sử dụng 01 tài khoản Thành viên để tích luỹ điểm thưởng cho mỗi đơn đặt phòng.</p>

                                        <p dir="ltr">1.7. Bằng việc tham gia vào Chương trình, thành viên đồng ý bị ràng buộc bởi tất cả các quy tắc, điều khoản và điều kiện của chương trình.</p>

                                        <p dir="ltr">1.8. Go2Joy được quyền kiểm tra một phần hoặc toàn bộ tài khoản thành viên bất kỳ của Chương trình tại bất kỳ thời điểm nào mà không cần thông báo trước.</p>

                                        <p dir="ltr">1.9. Go2Joy có quyền dừng tích điểm thành viên trong các trường hợp như thành viên vi phạm nghiêm trọng điều lệ của chương trình Điểm Tích Luỹ, phát hiện ưu đãi bị áp dụng sai mục đích, thành viên tự nguyện xin rút không tham gia, thành viên vi phạm các chính sách đặt phòng của Go2Joy,...Trong mọi trường hợp, toàn bộ số điểm còn lại trong tài khoản sẽ bị huỷ bỏ hoặc tạm ngưng tuỳ theo mức độ.</p>

                                        <p dir="ltr">1.10. Go2Joy sẽ áp dụng chính sách Điểm trừ trong các trường hợp như thành viên đặt phòng không trả trước và không nhận phòng, v.v...</p>

                                        <p dir="ltr">1.11. Điểm Tích Luỹ bị áp dụng sai mục đích bao gồm: trao đổi, cho tặng hoặc mua bán chương trình ưu đãi, cố ý sử dụng ưu đãi nhằm gian lận hoặc trục lợi, lợi dụng lỗi hệ thống hoặc các hành vi khác Go2Joy xem là sai mục đích.</p>

                                        <p dir="ltr">1.12. Go2Joy có quyền sửa đổi cấu trúc chương trình; thay đổi chính sách, tạm ngừng hoặc chấm dứt toàn bộ hoặc một phần hoạt động của chương trình “Điểm Tích Luỹ" &nbsp;tại bất kỳ thời điểm nào, có báo trước và có hướng xử lý đảm bảo quyền lợi của thành viên.</p>

                                        <p dir="ltr">1.13. Go2Joy không chịu trách nhiệm pháp lý đối với việc không thể cung cấp một phần hoặc toàn bộ các ưu đãi của chương trình dành cho Thành viên, cấp thưởng hoặc phần thưởng bị huỷ bỏ do ngừng quan hệ hợp tác với các đối tác, đối tác thay đổi chính sách trả thưởng hoặc phát hiện vi phạm điều lệ chương trình, ưu đãi bị áp dụng sai mục đích hay các lý do bất khả kháng khác.</p>

                                        <p dir="ltr">1.14. Go2Joy có quyền thông báo cho các cơ quan chức năng về các trường hợp có các hành vi gian lận trong tài khoản của khách hàng.</p>

                                        <p dir="ltr">1.15. Go2Joy có quyền được phối hợp với các đối tác hoặc các đơn vị chức năng trong quá trình kiểm tra, kiểm soát các tài khoản của khách hàng.</p>

                                        <p dir="ltr">1.16. Trong trường hợp có tranh chấp hoặc khiếu nại, quyết định của Go2Joy là quyết định cuối cùng.</p>

                                        <p dir="ltr"><strong>II. Điều lệ thành viên</strong></p>

                                        <p dir="ltr">2.1. Tất cả các cá nhân từ 18 tuổi trở lên, có quyền công dân, không giới hạn về quốc tịch, có số điện thoại di động liên lạc thường xuyên tại các khu vực địa lý được áp dụng và không trái với luật pháp của nước sở tại đều có thể trở thành thành viên “Điểm Tích Luỹ". Các cơ quan, đơn vị, tổ chức không được phép tham gia Chương trình “Điểm Tích Luỹ" Go2Joy như là một cá nhân..</p>

                                        <p dir="ltr">2.2. Để trở thành thành viên, cá nhân cần download ứng dụng Go2Joy (CH Play đối với các thiết bị Android) hoặc (IOS đối với các thiết bị iPhone), điền đầy đủ các thông tin trên ứng dụng Go2Joy (bao gồm email, password, nickname,...)</p>

                                        <p dir="ltr">2.3. Sau khi đăng ký thành công trên ứng dụng &nbsp;của Go2Joy.vn, thành viên có thể bắt đầu đặt phòng và tích luỹ điểm thông qua tài khoản này.</p>

                                        <p dir="ltr">2.4. Điểm là điểm dựa trên mức chi tiêu của thành viên trên Go2Joy. Mức tích luỹ điểm cho thành viên tùy theo chính sách từng thời điểm của Go2Joy.</p>

                                        <p dir="ltr">2.5. Điểm của thành viên tích luỹ được khi đặt phòng khách sạn trên ứng dụng Go2Joy hoặc từ các chương trình ưu đãi với đối tác, chương trình khuyến mại của Go2Joy tuỳ theo chính sách từng thời điểm của Go2Joy. Điểm của thành viên sẽ được khấu trừ sau mỗi lần thành viên đổi thưởng.</p>

                                        <p dir="ltr">2.6. Mỗi thành viên tham gia chương trình “Điểm Tích Luỹ” chỉ được phép có duy nhất một tài khoản để cộng điểm cho bản thân.</p>

                                        <p dir="ltr">2.7. Thành viên được cộng điểm sau khi check-in thành công, số điểm được cộng vào tài khoản trong vòng 24 tiếng kể từ thời điểm check-in thành công.</p>

                                        <p dir="ltr">2.8. Thành viên có thể được cộng thêm điểm vào tài khoản từ các chương trình ưu đãi tặng điểm Go2Joy và đối tác của chương trình Điểm Tích Luỹ &nbsp;phối hợp triển khai và được Go2Joy thông báo trước.</p>

                                        <p dir="ltr">2.9. Thành viên cần có ít nhất 1 booking (đơn đặt phòng) thành công để có thể sử dụng số điểm đang có quy đổi ra phần thưởng. Booking thành công được định nghĩa là booking khách hàng đã check-in thành công.</p>

                                        <p>Địa chỉ liên lạc chính thức:</p>

                                        <p>CÔNG TY CỔ PHẦN APPRO MOBILE</p>

                                        <p>Địa chỉ: Lầu 2, Số 5A/2&nbsp;Trần Phú, Phường 4, Quận 5, TP.HCM.</p>

                                        <p>Email: support@go2joy.vn.</p>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane :label="$t('table.hotels.label_header.mileage_point_service_agreenebt')">
                                    <div id="mp" aria-labelledby="ui-id-3" role="tabpanel" class="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="false" style="display: block;">
                                        <p>1. Tích lũy điểm bằng cách nào?<br>
                                            - Thanh toán trên App: 1.000 đồng = 30 điểm (tương đương 3% giá trị thanh toán)<br>
                                            - Thanh toán tại khách sạn: 1.000 đồng = 10 điểm (tương đương 1% giá trị thanh toán)<br>
                                            - Số tiền &lt; 1.000 đồng được làm tròn thành 0<br>
                                            - Số tiền thanh toán sau khi đã trừ các khoản giảm bằng tiền như coupon, flash sale, đổi tem, đổi điểm, giảm giá trực tiếp…<br>
                                            - Điểm tích lũy có thời hạn 12 tháng để quy đổi khi đủ điều kiện<br>
                                            2. Đổi điểm bằng cách nào?<br>
                                            - Đổi điểm thành tiền phòng: 10.000 điểm = 10.000 đồng<br>
                                            - Đổi điểm thành các sản phẩm, dịch vụ khác của khách sạn và đối tác liên kết (theo quy định riêng)<br>
                                            - Điểm tích lũy tối thiểu để quy đổi: 50.000 điểm&nbsp;</p>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane :label="$t('table.hotels.label_header.payment_policy_service_agreenebt')">
                                    <div id="payment" aria-labelledby="ui-id-4" role="tabpanel" class="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="false" style="display: block;">
                                        <p>&nbsp;</p>

                                        <ul>
                                            <li dir="ltr">
                                                <p dir="ltr"><strong>Đặt phòng thành công được xác định trong các trường hợp:</strong></p>

                                                <ul>
                                                    <li>
                                                        <p dir="ltr"><strong>Trường hợp 1: Khách hàng thanh toán trước qua ứng dụng Go2Joy, không huỷ và không bị huỷ booking, có check-in hoặc không check-in đều được tính là đặt phòng thành công. Thanh toán trước bao gồm các hình thức thanh toán online thông qua đối tác thứ 3 (ví dụ: &nbsp;Mo Mo, Payoo…), không phải thanh toán trực tiếp với Khách sạn.</strong></p>
                                                    </li>
                                                    <li>
                                                        <p dir="ltr"><strong>Trường hợp 2: Khách hàng thanh toán trực tiếp với khách sạn, được khách sạn &nbsp;check-in qua trang web quản lý đặt phòng hoặc khách hàng tự check-in bằng quét mã QR được tính là đặt phòng thành công.</strong></p>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li dir="ltr">
                                                <p dir="ltr"><strong>Đặt phòng không thành công được xác định trong trường hợp: </strong></p>

                                                <ul>
                                                    <li>
                                                        <p dir="ltr"><strong>Trường hợp 1: Khách hàng thanh toán trước qua ứng dụng Go2Joy, khách huỷ booking trước 1 tiếng đồng hồ trước giờ check in được tính là đặt phòng không thành công. Thanh toán trước bao gồm các hình thức thanh toán online thông qua đối tác thứ 3 (ví dụ: &nbsp;Mo Mo, Payoo…), không phải thanh toán trực tiếp với Khách sạn.</strong></p>
                                                    </li>
                                                    <li>
                                                        <p dir="ltr"><strong>Trường hợp 2: Khách hàng thanh toán trực tiếp với khách sạn, khách hàng không đến check - in hoặc được khách sạn check - in .</strong></p>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li dir="ltr">
                                                <p dir="ltr"><strong>Chính sách hoàn tiền cho khách: </strong></p>

                                                <ul>
                                                    <li>
                                                        <p dir="ltr"><strong>Trường hợp 1: Khách hàng thanh toán trước qua ứng dụng Go2Joy: Sau khi đã xác nhận các thông tin của các khách hàng về các booking không thành công, tuỳ theo từng loại tài khoản khách hàng sử dụng mà việc hoàn tiền sẽ có thời gian khác nhau : </strong></p>

                                                        <ul>
                                                            <li>
                                                                <p dir="ltr"><strong>Thẻ ATM (nội địa): Hoàn tiền trong 7 ngày làm việc</strong></p>
                                                            </li>
                                                            <li>
                                                                <p dir="ltr"><strong>Thẻ Visa/Master Card (nội địa): Hoàn tiền trong 7 ngày làm việc</strong></p>
                                                            </li>
                                                            <li>
                                                                <p dir="ltr"><strong>Thẻ Visa/Master Card (quốc tế): Hoàn tiền từ 30 đến 45 ngày</strong></p>
                                                            </li>
                                                            <li>
                                                                <p dir="ltr"><strong>Ví Mo Mo: Hoàn tiền trong ngày &nbsp;&nbsp;</strong></p>
                                                            </li>
                                                            <li>
                                                                <p dir="ltr"><strong>Lưu ý: thời gian hoàn tiền không bao gồm thứ 7, chủ nhật và các ngày lễ</strong></p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <p dir="ltr"><strong>Trường hợp 2: Khách hàng thanh toán trực tiếp với khách sạn: Khách hàng không được hoàn tiền.</strong> |</p>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li dir="ltr">
                                                <p dir="ltr"><strong>Successful booking is determined in the following cases:</strong></p>

                                                <ul>
                                                    <li>
                                                        <p dir="ltr"><strong>Case 1: Customers who pay in advance through Go2Joy, do not cancel and not cancel the booking, check-in or not check-in are counted as successful bookings. Prepayment includes online payment methods through 3rd party partners (eg:&nbsp;Mo Mo, Payoo ...), do not have to pay directly with Hotels.</strong></p>
                                                    </li>
                                                    <li>
                                                        <p dir="ltr"><strong>Case 2: Customers who pay directly to hotels, be checked by hotels via the booking management website or customers check-in by scanning the QR code are counted as successful booking.</strong></p>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li dir="ltr">
                                                <p dir="ltr"><strong>Unsuccessful booking is determined in the following cases</strong></p>

                                                <ul>
                                                    <li>
                                                        <p dir="ltr"><strong>Case 1: Customers who pay in advance through Go2Joy, cancel booking 1 hour before check-in time are counted as successful bookings. Prepayment includes online payment methods through 3rd party partners (eg: Mo Mo, Payoo ...), do not have to pay directly with Hotels.</strong></p>
                                                    </li>
                                                    <li>
                                                        <p dir="ltr"><strong>Case 2: Customers who pay directly to hotels, don’t check in or hotels check - in</strong></p>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li dir="ltr">
                                                <p dir="ltr"><strong>Refund Policy: </strong></p>

                                                <ul>
                                                    <li>
                                                        <p dir="ltr"><strong>Case 1: Customers who pay in advance through Go2Joy: After identifying about unsuccessful bookings, it will have different refunding times depending different bank accounts: </strong></p>

                                                        <ul>
                                                            <li>
                                                                <p dir="ltr"><strong>Internal Cards (ATM): Refund in 7 days of working hours</strong></p>
                                                            </li>
                                                            <li>
                                                                <p dir="ltr"><strong>Visa/Master Cards (Internal): Refund in 7 days of working hours</strong></p>
                                                            </li>
                                                            <li>
                                                                <p dir="ltr"><strong>Visa/Master Cards (International): Refund in 30 to 45 days </strong></p>
                                                            </li>
                                                            <li>
                                                                <p dir="ltr"><strong>Mo Mo: Refund in day</strong></p>
                                                            </li>
                                                            <li>
                                                                <p dir="ltr"><strong>Notes: Refunding time is not included in Saturday, Sunday and Holidays</strong></p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <p dir="ltr"><strong>Case 2: Customers who pay directly to hotels will not be refunded</strong></p>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                    </div>
                </div>
                <!-- End col -->
            </div>
        </div>
    </div>
</div>
</template>

<script>
// import Datatable from "../../../components/Datatable";

export default {
    name: "ServiceAgreementMgt",
    components: {
        // Datatable,
    },
    data() {
        return {
            loading: true,

        }
    },
    async created() {
        let current_page = localStorage.getItem("current_page");
        if (current_page == 'null') {
            localStorage.setItem("current_page", '1');
        }
    },
    // mounted() {
    //     let self = this;
    //     axios.defaults.headers = {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
    //     }
    //     let url = this.appConfig.api.url + this.appConfig.api.endpoint.hotelMgt;
    //     console.log('url', url)
    //     axios.get(url)
    //         .then(function (response) {
    //             console.log('response', response)
    //             self.loading = false;
    //             let data = response.data.data;
    //             console.log('data', response.data)
    //             self.tableData = data.hotels;
    //             self.totalItems = data.meta.total;
    //             console.log('self.tableData', self.tableData)
    //             console.log('self.totalItems', self.totalItems)
    //         })
    //         .catch(error => {
    //             self.loading = false;
    //             try {
    //                 const data = error.response.data;
    //                 this.$awn.alert(data.message);
    //             } catch (err) {
    //                 this.$awn.alert('Can\'t connect to server.<br/>Please try again later.');
    //             }
    //         })
    // },

    methods: {
        onUpdateServiceAgreementMgt() {
            this.$router.push(`/hotel-management/update-service-agreement-mgt`);
        },

        reloadTableData(args) {
            let self = this;
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
            }
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.hotelMgt +
                `?page=${args.currentPage}&limit=${args.pageSize}&keyword=${args.keyword}&status=1&dateFrom=${args.dateFrom ? args.dateFrom : ''}&dateTo=${args.dateTo ? args.dateTo : ''}`;
            axios.get(url)
                .then(function (response) {
                    self.loading = false;
                    localStorage.setItem("curent_page", args.currentPage);
                    let data = response.data.data;
                    self.tableData = data.hotels;
                    self.totalItems = data.meta.total;
                    self.pageSize = args.pageSize;
                })
                .catch(error => {
                    self.loading = false;
                    try {
                        const data = error.response.data;
                        this.$awn.alert(data.message);
                    } catch (err) {
                        this.$awn.alert('Can\'t connect to server.<br/>Please try again later.');
                    }
                })
        },
    },
}
</script>
