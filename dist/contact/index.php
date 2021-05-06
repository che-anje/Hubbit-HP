<?php
require_once '../vendor/autoload.php';
require_once './bootstrap.php';

$loader = new Twig_Loader_Filesystem(__DIR__ . '/templates');
$twig = new Twig_Environment($loader, array(
//    'cache' => __DIR__ . '/twig_cache',
    'debug' => true
));
$twig->addExtension(new Twig_Extension_Debug());

function include_ex($path)
{
    include($_SERVER['DOCUMENT_ROOT'] . $path);
}

$function = new Twig_SimpleFunction('include_ex', 'include_ex');
$twig->addFunction($function);


$twig->addFilter('errorMessage', new Twig_Filter_Function('errorMessage'));

$v = new Valitron\Validator($_POST);
$v->rule('required', array(
    'firstname',
    'lastname',
    'email',
    'tel',
    'type',
    'message',
))->message('必ず入力してください。');
$v->rule('email', 'email')->message('正しい形式で入力してください。');
$v->rule('regex', array('tel'), '/^[0-9\-]+$/')->message('半角数字またはハイフン（-）のみで入力してください。');
$v->rule('lengthMax', array(
    'firstname',
    'lastname',
    'email',
    'tel',
    'type',
), 100)->message('100文字以内で入力してください');
$v->rule('lengthMax', array(
    'message',
), 2000)->message('2000文字以内で入力してください');

$v->rule('in', array('type'), array(
    'お仕事のご依頼',
    'サービスについてのお問い合わせ',
    'Happy Endingカードセミナーのご依頼',
    '遺言書のご相談',
    '取材のご依頼',
    '事業提携のご相談',
    'MY LIST 100 のサンプル申し込み',
    'その他お問い合わせ',
))->message('正しくありません');

$v->labels(array(
    'firstname' => '名',
    'lastname' => '姓',
    'email' => 'メールアドレス',
    'tel' => '電話番号',
    'type' => 'お問い合わせ内容',
    'message' => 'メッセージ',
));

$data = array(
    'post' => $_POST,
    'document_root' => $_SERVER['DOCUMENT_ROOT'],
    'token' => Csrf::generate()
);

if ($v->validate()) {

    if (isset($_POST['action']) && $_POST['action'] == 'SEND') {

        if (!Csrf::validate(filter_input(INPUT_POST, 'token'))) {
            echo "error";
            exit;
        }

        $subject = '【Hubbit株式会社】お問い合わせありがとうございます';
        $body = $twig->render('mailbody.form.customer.html.twig', $data);

        $res1 = send($_POST['email'], $subject, $body, FROM_MAIL);
        if ($res1) {
            $subject = '【Hubbit株式会社】お問い合わせいただきました';
            $body = $twig->render('mailbody.form.admin.html.twig', $data);

            $res2 = send(ADMIN_MAIL, $subject, $body, FROM_MAIL);
            if ($res2) {
                $protocol = $_SERVER['SERVER_PORT'] == 80 ? 'http' : 'https';
                header('Location: ' . $protocol . '://' . $_SERVER['HTTP_HOST'] . '/');
            } else {
                echo "メール送信に失敗しました。(1)";
            }
        } else {
            echo "メール送信に失敗しました。(2)";
        }
        exit;
    }
}

if (!empty($_POST)) {
    $data['errors'] = $v->errors();
}

echo $twig->render('index.html.twig', $data);

