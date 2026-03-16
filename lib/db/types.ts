export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      roles: {
        Row: {
          id: string
          name: string
          description: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          created_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          role: 'learner' | 'admin' | null
          preferred_model: string | null
          created_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          role?: 'learner' | 'admin' | null
          preferred_model?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          role?: 'learner' | 'admin' | null
          preferred_model?: string | null
          created_at?: string
        }
      }
      sessions: {
        Row: {
          id: string
          user_id: string
          login_time: string
          logout_time: string | null
          ip_address: string | null
          user_agent: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          login_time?: string
          logout_time?: string | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          login_time?: string
          logout_time?: string | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
      }
      courses: {
        Row: {
          id: string
          title: string
          description: string | null
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          created_at?: string
        }
      }
      modules: {
        Row: {
          id: string
          course_id: string
          title: string
          order_index: number
          created_at: string
        }
        Insert: {
          id?: string
          course_id: string
          title: string
          order_index: number
          created_at?: string
        }
        Update: {
          id?: string
          course_id?: string
          title?: string
          order_index?: number
          created_at?: string
        }
      }
      tasks: {
        Row: {
          id: string
          module_id: string
          type: 'quiz' | 'coding' | 'lecture' | 'project'
          content: Json
          order_index: number
          created_at: string
        }
        Insert: {
          id?: string
          module_id: string
          type: 'quiz' | 'coding' | 'lecture' | 'project'
          content: Json
          order_index: number
          created_at?: string
        }
        Update: {
          id?: string
          module_id?: string
          type?: 'quiz' | 'coding' | 'lecture' | 'project'
          content?: Json
          order_index?: number
          created_at?: string
        }
      }
      submissions: {
        Row: {
          id: string
          user_id: string
          task_id: string
          answer: Json
          score: number | null
          feedback: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          task_id: string
          answer: Json
          score?: number | null
          feedback?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          task_id?: string
          answer?: Json
          score?: number | null
          feedback?: string | null
          created_at?: string
        }
      }
    }
  }
}
