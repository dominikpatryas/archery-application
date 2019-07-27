<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $user = new User();
        $user->setEmail("john.doe@gmail.com");
        $user->setPassword($this->encoder->encodePassword($user, 'test'));
        $user->setFirstName('John');
        $user->setLastName('Doe');
        $user->setUsername('johndoe');
        $user->setIsActive(true);
        $user->addRole('ROLE_USER');

        $manager->persist($user);
        $manager->flush();
    }
}
