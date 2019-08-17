<?php

namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation;
use App\Entity\User;
use App\Form\UserType;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Entity\Announcement;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Flex\Response as SymfonyResponse;

class UserController extends AbstractController
{
    /**

     * @Route("/register", methods={"POST"}, name="register")
     */
    public function registerUser(Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        $user = new User();

        $string = $request->getContent();
        $data = json_decode(preg_replace('/\s+/', '', $string), true);
        $form = $this->createForm(UserType::class, $user);

        $user->addRole('ROLE_USER');
        $form->submit($data);
        $password = $passwordEncoder->encodePassword($user, $user->getPassword());
        $user->setPassword($password);

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($user);
        $entityManager->flush();

        return new Response('Created user', Response::HTTP_CREATED);
      
    }
}
