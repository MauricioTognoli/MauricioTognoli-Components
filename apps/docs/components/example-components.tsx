"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Heart, Star, MessageCircle } from "lucide-react"

interface ExampleComponentsProps {
  selectedComponent: string
}

export function ExampleComponents({ selectedComponent }: ExampleComponentsProps) {
  const [liked, setLiked] = useState(false)
  const [starred, setStarred] = useState(false)

  const renderComponent = () => {
    switch (selectedComponent) {
      case "button":
        return (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button variant="default">Primary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                onClick={() => setLiked(!liked)}
                className={liked ? "text-red-500 border-red-500" : ""}
              >
                <Heart className={`h-4 w-4 mr-2 ${liked ? "fill-current" : ""}`} />
                {liked ? "Liked" : "Like"}
              </Button>
              <Button
                variant="outline"
                onClick={() => setStarred(!starred)}
                className={starred ? "text-yellow-500 border-yellow-500" : ""}
              >
                <Star className={`h-4 w-4 mr-2 ${starred ? "fill-current" : ""}`} />
                {starred ? "Starred" : "Star"}
              </Button>
            </div>
          </div>
        )

      case "card":
        return (
          <div className="grid gap-4 md:grid-cols-2 max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle>Modern Design</CardTitle>
                <CardDescription>Clean and minimal card component with proper spacing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Badge>React</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  Featured Card
                </CardTitle>
                <CardDescription>Enhanced card with gradient background and icon</CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="sm" className="w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        )

      case "modal":
        return (
          <div className="space-y-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Modal</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Example Modal</DialogTitle>
                  <DialogDescription>
                    This is a sample modal dialog with proper accessibility features.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Modal dialogs are perfect for displaying important information or collecting user input without
                    navigating away from the current page.
                  </p>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Confirm</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <p className="text-sm text-muted-foreground text-center">
              Click the button above to see the modal in action
            </p>
          </div>
        )

      case "form":
        return (
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>Send us a message and we'll get back to you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your message..."
                />
              </div>
              <Button className="w-full">
                <MessageCircle className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        )

      default:
        return (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Select a component to preview</p>
          </div>
        )
    }
  }

  return <div className="w-full">{renderComponent()}</div>
}
