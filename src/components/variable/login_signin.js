export const loginForm = {
    id: 'login',
    title: 'Thông tin đăng nhập',
    input: [
        {type: 'email', label: 'Email', id: 'inputEmail' },
        {type: 'password', label: 'Mật khẩu', id: 'inputPassword' }
    ],
    isCheck: true,
    Check: 'Ghi nhớ đăng nhập',
    isPass: true,
    btn: [
        {name: 'đăng nhập', url : '/product'}
    ]
};
export const recommend = {
    title: 'bạn chưa có tài khoản ?',
    text: `Đăng ký tài khoản để mua hàng nhanh hơn. Theo dõi đơn đặt
    hàng, vận chuyển. Cập nhật các tin
    tức sự kiện và các chương trình giảm
    giá của chúng tôi.`,
    btn: [
        {name: 'đăng kí', url : '/signup'}
    ]
}
export const infoForm = {
    id: 'info',
    title: 'thông tin cá nhân',
    input: [
        {type: 'text', label: 'Họ và tên', id: 'inputName' },
        {type: 'email', label: 'Email', id: 'email' },
        {type: 'number', label: 'Số điện thoại', id: 'inputPhone' },
        {type: 'text', label: 'Địa chỉ', id: 'inputAddress' }
    ],
    isCheck: true,
    Check: 'Đăng kí nhận tin tức qua email'
}
export const signUp = {
    id: 'signup',
    title: 'thông tin đăng nhập',
    input: [
        {type: 'email', label: 'Email', id: 'inputEmail' },
        {type: 'password', label: 'Mật khẩu', id: 'inputPassword' }
    ],
    btn: [
        {name: 'quay lại', url: '/login'},
        {name: 'đăng kí', url: '/product'}
    ]
}