import { Component, OnInit, ViewChild, EventEmitter, Output, Input, ElementRef, AfterViewChecked } from '@angular/core';
import { Comment } from '../../models/comment.model';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';


@Component({
  selector: 'app-comments-box',
  templateUrl: './comments-box.component.html',
  styleUrls: ['./comments-box.component.scss']
})
export class CommentsBoxComponent implements OnInit, AfterViewChecked {

  @Input() comments: Comment[] = [];
  @Input() sendDisabled: boolean;
  @Output() commentSend = new EventEmitter<string>();
  @ViewChild('scroll') private myScrollContainer: ElementRef;


  currentUserId: number;

  commentGroup = this.fb.group({
    comment: [''],
  });

  constructor(
    public fb: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.currentUserId = this.authService.userId;
    this.scrollToBottom();
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  onSend(): void {
    const commentText = this.commentGroup.value.comment;
    if (commentText && commentText !== '') {
      this.commentGroup.reset();
      this.commentSend.emit(commentText);
      this.scrollToBottom();
    }
  }

  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
}

}
