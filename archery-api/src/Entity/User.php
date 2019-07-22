<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 */
class User implements UserInterface, \Serializable
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100, unique=true)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=100, unique=true)
     */
    private $firstName;

    /**
     * @ORM\Column(type="string", length=100, unique=true)
     */
    private $lastName;

    /**
     * @ORM\Column(type="datetime", unique=true)
     */
    private $dateRegistered;

    /**
     * @ORM\Column(type="string", length=100, unique=true)
     */
    private $password;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getRoles()
    {
        // TODO: Implement getRoles() method.
    }

    public function getUsername()
    {
        // TODO: Implement getUsername() method.
    }

    public function getSalt()
    {
        // TODO: Implement getSalt() method.
    }

    public function eraseCredentials()
    {
        // TODO: Implement eraseCredentials() method.
    }
    public function serialize()
    {
       return serialize([
            $this->id,
            $this->email,
            $this->password
            ]);
    }

    public function unserialize($serialized)
    {
        list (
            $this->id,
            $this->email,
            $this->password
            ) = $this->unserialize($serialized,['allowed_classes' => false]);
    }
}
